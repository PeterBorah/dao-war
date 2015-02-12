from eth_tools import address
from nose.tools import assert_equal, assert_raises
from pyethereum import tester as t

class TestGamemaster:
    def setup(self):
        self.state = t.state()
        self.contract = self.state.abi_contract("contracts/gamemaster.se")

    def test_can_create_game(self):
        creature_list = [3, 4]
        self.contract.rewrite_state(creature_list, 100)

        assert_equal(self.contract.get_creature_list(outsz=2), creature_list)
        assert_equal(self.contract.get_num_creatures(), [2])
        assert_equal(self.contract.get_turn_limit(), [100])

    def test_only_creator_can_rewrite_state(self):
        creature_list = [3, 4]
        self.contract.rewrite_state(creature_list, 100)

        assert_equal(self.contract.rewrite_state(creature_list, 50, sender=t.k1), [-1])
        assert_equal(self.contract.get_turn_limit(), [100])

    def test_run_game_calls_down_to_brain_through_body(self):
        brain_1 = self.state.abi_contract("mocks/brain/counter.se")
        brain_2 = self.state.abi_contract("mocks/brain/counter.se")

        creature_1 = self.state.abi_contract("contracts/body.se")
        creature_1.rewrite_state(0, 10000, 0, brain_1.address, 0, self.contract.address, 0)

        creature_2 = self.state.abi_contract("contracts/body.se")
        creature_2.rewrite_state(0, 10000, 0, brain_2.address, 0, self.contract.address, 0)

        self.contract.rewrite_state([creature_1.address, creature_2.address], 5)
        self.contract.run_game()

        assert_equal(brain_1.get_num_turns(), [5])
        assert_equal(brain_2.get_num_turns(), [5])

    def test_acting_creature_can_spawn_new_creatures(self):
        child = self.state.abi_contract("mocks/brain/counter.se")
        body = self.state.abi_contract("mocks/body/spawner.se")
        body.set_child_address(child.address)
        self.contract.rewrite_state([body.address], 1)

        self.contract.run_game()

        assert_equal(self.contract.get_num_creatures(), [2])
        assert_equal(child.get_num_turns(), [1])

    def test_only_acting_creature_can_spawn(self):
        self.contract.rewrite_state([t.a1], 5)

        assert_equal(self.contract.notify_of_spawn(t.a0), [-1])
        assert_equal(self.contract.get_num_creatures(), [1])

    def test_running_turn_charges_gas(self):
        body = self.state.abi_contract("mocks/body/cost_counter.se")
        self.contract.rewrite_state([body.address], 1)

        self.contract.run_turn()

        assert(body.get_amount()[0] > 100)

    def test_turn_only_takes_given_bodys_remaining_gas(self):
        body = self.state.abi_contract("mocks/body/bankrupt.se")
        self.contract.rewrite_state([body.address], 3)

        assert_raises(Exception, self.contract.run_game)
