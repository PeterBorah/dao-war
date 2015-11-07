"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Game = (function (_Pudding) {
    _inherits(Game, _Pudding);

    function Game() {
      _classCallCheck(this, Game);

      _get(Object.getPrototypeOf(Game.prototype), "constructor", this).apply(this, arguments);
    }

    return Game;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Game.abi = [{ "constant": true, "inputs": [], "name": "num_species", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "x", "type": "uint256" }, { "name": "y", "type": "uint256" }, { "name": "_gas_deposits", "type": "uint8" }, { "name": "_gas_amount", "type": "uint256" }, { "name": "_starting_gas", "type": "uint256" }, { "name": "_creature_builder", "type": "address" }], "name": "initialize", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "species", "outputs": [{ "name": "name", "type": "string" }], "type": "function" }, { "constant": true, "inputs": [], "name": "starting_gas", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "board", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "valid_creature", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_creature", "type": "address" }], "name": "register_creature", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "creature_builder", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "gas_deposits", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "brain", "type": "address" }, { "name": "species_name", "type": "string" }], "name": "add_creature", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "_random_empty_location", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }], "name": "all_creatures_for_species", "outputs": [{ "name": "", "type": "address[]" }], "type": "function" }, { "constant": true, "inputs": [], "name": "admin", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "gas_amount", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "name", "type": "string" }, { "indexed": false, "name": "first_creature", "type": "address" }], "name": "NewSpecies", "type": "event" }];
  Game.binary = "606060405260028054600160a060020a03191633179055611b13806100246000396000f3606060405236156100ae5760e060020a60003504634bee472b81146100b05780634e15c376146100b957806355ed26c9146101c75780636f9c494b146102095780637cd3229a146102125780637d9383c31461022457806386acb16d1461023f578063965fd7b6146102c6578063a49c326e146102d8578063bffb10de146102eb578063c062ef86146103b7578063d0dc0a0414610526578063f851a440146105d2578063fb794281146105e4575b005b6105ed60055481565b6100ae60043560243560443560643560843560a435600254600160a060020a039081169033168114156101bd5760018054600160a060020a03191683179055604051610cd680610e3d83398101819003906000f06000805460408051600160a060020a0319909216939093178083557f3cb260b2000000000000000000000000000000000000000000000000000000008252600482018b9052602482018a90529251600160a060020a039390931692633cb260b292604483810193919291829003018183876161da5a03f1156100025750506002805474ff0000000000000000000000000000000000000000191660a060020a880217905550600384905560048390555b505b505050505050565b6105ff60043560078054829081101561000257506000527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6886002919091020181565b6105ed60045481565b610689600054600160a060020a031681565b6105ed60043560066020526000908152604090205460ff1681565b6100ae60043530600160a060020a031633600160a060020a031614806102745750600254600160a060020a0390811633909116145b8061029a575033600160a060020a031660009081526006602052604090205460ff166001145b156102c357600160a060020a0381166000908152600660205260409020805460ff191660011790555b50565b610689600154600160a060020a031681565b6106a660025460a060020a900460ff1681565b60408051602060248035600481810135601f81018590048502860185019096528585526100ae958135959194604494929390920191819084018382808284375094965050505050505060035460025460045460a060020a90910460ff169091020160008080348490106101bf57600160009054906101000a9004600160a060020a0316600160a060020a031663a2bcee8b6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505060405151935061070790506103bb565b6105ed5b60008054604080517f0539c6d60000000000000000000000000000000000000000000000000000000081529051600019430140928492839283928392600160a060020a039190911691630539c6d691600481810192602092909190829003018187876161da5a03f1156100025750506040515194505083850692505b8382101561051e578183019050600060009054906101000a9004600160a060020a0316600160a060020a031663f6a5414d826040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f11561000257505060405151600014905080156105155750600060009054906101000a9004600160a060020a0316600160a060020a0316638f8930da826040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f11561000257505060405151600160a060020a031660001490505b15610e31578095505b505050505090565b6106bd6004356040805160208101909152600081526007805483908110156100025750600052604080517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6896002850201805460208181028401810190945280835291929091908301828280156105c657602002820191906000526020600020905b8154600160a060020a03168152600191909101906020018083116105a7575b50505050509050919050565b610689600254600160a060020a031681565b6105ed60035481565b60408051918252519081900360200190f35b60408051602080825283546002600182161561010002600019019091160490820181905290918291908201908490801561067a5780601f1061064f5761010080835404028352916020019161067a565b820191906000526020600020905b81548152906001019060200180831161065d57829003601f168201915b50509250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b6040805160ff929092168252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600302600f01f1509050019250505060405180910390f35b600580546001810190915560008054604080517fba50f96500000000000000000000000000000000000000000000000000000000815260048101869052600160a060020a0389811660248301529151959750939550169263ba50f965926044818101939291829003018183876161da5a03f1156100025750505030600160a060020a03166386acb16d846040518260e060020a0281526004018082600160a060020a031681526020019150506000604051808303816000876161da5a03f115610002575050507f0570794edb4d8f80e356608cbfd520f199b29932734167be01d0bed708e25a7d818685604051808481526020018060200183600160a060020a031681526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156108665780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a160078054600181018083559091908280158290116108c85760008390526108c89060029081027fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6889081019184020161094a565b505050508460076000508281548110156100025790600052602060002090600202016000506000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106109ce57805160ff19168380011785555b506109fe929150610998565b50506001015b808211156109ca57600060008201600050805460018160011615610100020316600290046000825580601f106109ac57505b5060018201805460008083559182526020909120610944918101905b808211156109ca5760008155600101610998565b601f01602090049060005260206000209081019061097c9190610998565b5090565b82800160010185558215610938579182015b828111156109385782518260005055916020019190600101906109e0565b50506007805482908110156100025750600052600281027fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c689018054600181018083558281838015829011610a6557818360005260206000209182019101610a659190610998565b50505060009283525060208220018054600160a060020a0319168517905560408051600480547fc9f26fc6000000000000000000000000000000000000000000000000000000008352908201529051600160a060020a0386169263c9f26fc69260248082019391829003018183876161da5a03f115610002575050604080517f7593473c000000000000000000000000000000000000000000000000000000008152600160a060020a03891660048201529051637593473c91602481810192600092909190829003018183876161da5a03f1156100025750505082600160a060020a03166378cffc09836040518260e060020a028152600401808281526020019150506000604051808303816000876161da5a03f115610002575050604080517f14fefca10000000000000000000000000000000000000000000000000000000081526003600482015290516314fefca191602481810192600092909190829003018183876161da5a03f11561000257505060408051600080547faeec6197000000000000000000000000000000000000000000000000000000008352600160a060020a03166004830152915163aeec619792602483810193919291829003018183876161da5a03f1156100025750505082600160a060020a03166382b022e0826040518260e060020a028152600401808281526020019150506000604051808303816000876161da5a03f115610002575050604080516001547f4f002522000000000000000000000000000000000000000000000000000000008252600160a060020a031660048201529051634f00252291602481810192600092909190829003018183876161da5a03f115610002575050604080517f45c5b8ac00000000000000000000000000000000000000000000000000000000815230600160a060020a0316600482015290516345c5b8ac91602481810192600092909190829003018183876161da5a03f115610002575050604080516002547fe9333fab000000000000000000000000000000000000000000000000000000008252600160a060020a03166004820152905163e9333fab91602481810192600092909190829003018183876161da5a03f11561000257505060405160045460009182818181858883f1508254600160a060020a0316935034919091039082818181858883f1506002546003547f1d18b85700000000000000000000000000000000000000000000000000000000835260a060020a90910460ff1660048301526024820152604051631d18b85793604483810194509092829003018183876161da5a03f11561000257505050505050505050565b600191909101906104375660606040526007805433600160a060020a031990911681179091556006805461010060a860020a031916610100909202919091179055610c93806100436000396000f3606060405236156101275760e060020a60003504630539c6d6811461012957806317a650cc146101335780631d18b857146101e057806324eb95fe1461026f5780633cb260b21461028757806345c5b8ac146102fc5780634edccd311461034557806352d4bb02146104215780635d7bb3571461042a57806361f2de501461049257806366ab88ee1461055e578063680f0eda1461056a578063705bd6f61461058e5780638f8930da146105b9578063b070bdc6146105ed578063b5a27a2114610686578063ba50f9651461072e578063c3fe3e2814610771578063ddc6326214610788578063e6f3ae3c1461087e578063e9333fab146108b0578063eecc3be8146108e6578063f0a45cff14610956578063f6a5414d146109fe578063f851a44014610a4a575b005b610a5c6002545b90565b610127600435600660019054906101000a9004600160a060020a0316600160a060020a0316637d9383c3336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f115610002575050604051516001141590506108e3573360026000508281548110156100025750600052600080516020610c538339815191529091018054600160a060020a0319169091179055565b610127600435602435600754600090819081908190600160a060020a03908116903316811415610b5a5743600019014094505b8660ff168460ff161015610b5a576001805461010087049660ff9081900695508582020493508791908490811015610002576000918252600080516020610c738339815191520190508054909101905560019390930192610213565b610a5c60043560038160028110156100025750015481565b610127600435602435600754600160a060020a03908116903316811415610b5f576003839055600482905560018054838502808355919082908015829011610b64576000839052610b6490600080516020610c738339815191529081019083015b80821115610ba157600081556001016102e8565b610127600435600754600160a060020a039081169033168114156108e15760068054610100840274ffffffffffffffffffffffffffffffffffffffff0019919091161790555050565b610127600435602435604435606435600754600160a060020a0390811690331681141561041a578360006000508681548110156100025790805260208082047f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630191066101000a81548160ff02191690830217905550826001600050868154811015610002576000918252600080516020610c7383398151915201905055600280548391908790811015610002575060005250600080516020610c5383398151915285018054600160a060020a031916831790555b5050505050565b610a5c60055481565b610a6e60408051602081810183526000825282516001805480840283018401909552848252929390929183018282801561048657602002820191906000526020600020905b81600050548152602001906001019080831161046f575b50505050509050610130565b610127600435602435600660019054906101000a9004600160a060020a0316600160a060020a0316637d9383c3336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f1156100025750506040515160011490508061051e5750600754600160a060020a0390811633909116145b156108e15780600260005083815481101561000257600091909152600080516020610c53833981519152018054600160a060020a03191690911790555050565b610a5c60065460ff1681565b610127600435600754600160a060020a039081169033168114156108e15750600555565b610a5c6004356001805482908110156100025750600052600080516020610c73833981519152015481565b610ab86004356002805482908110156100025750600052600080516020610c538339815191520154600160a060020a031681565b604080516020818101835260008083528351815480840282018401909552848152610a6e949092830182828015610486579080526020028101907f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639084905b825461010083900a900460ff1681526020600192830181810494850194909303909202910180841161064c57905050505050509050610130565b610127600435600660019054906101000a9004600160a060020a0316600160a060020a0316637d9383c3336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f115610002575050604051516001141590506108e3576000600260005082815481101561000257509052600080516020610c53833981519152018054600160a060020a0319169055565b610127600435602435806002600050838154811015610002575060005250600080516020610c538339815191529091018054600160a060020a0319169091179055565b610ab86006546101009004600160a060020a031681565b610a5c6004356000600660019054906101000a9004600160a060020a0316600160a060020a0316637d9383c3336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f115610002575050604051516001141590506108795760055460018054849081101561000257508252600080516020610c738339815191528301541115610be6576001805460055491908490811015610002575050600080516020610c738339815191528301805491909103905560055460405133600160a060020a031691839182818181858883f1509093505050505b919050565b610a5c60043560243560008160ff1660001480156108a0575060035483068114155b15610afb57506000198201610af5565b610127600435600754600160a060020a039081169033168114156108e15760078054600160a060020a031916831790555b505b50565b610a6e60408051602081810183526000825260028054845181840281018401909552808552929392909183018282801561048657602002820191906000526020600020905b8154600160a060020a031681526001919091019060200180831161092b575b50505050509050610130565b61012760043560243533600160a060020a031660026000508381548110156100025750600052600080516020610c53833981519152830154600160a060020a031614156108e1576000600260005083815481101561000257600080516020610c5383398151915281018054600160a060020a031916905560018054859450909250811015610002575060005250600080516020610c7383398151915290910180549091019055565b610a5c6004356000805482908110156100025750805260208082047f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563015491066101000a900460ff1681565b610ab8600754600160a060020a031681565b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600302600f01f1509050019250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b8160ff166002148015610ae9575060035483115b15610b26575060035482035b92915050565b8160ff166001148015610b175750600354600019810190840614155b15610ad5575060018201610af5565b8160ff166003148015610b425750600354600454026000190183105b15610b5257506003548201610af5565b506000610af5565b505050505b505050565b50505050818302600260005081815481835581811511610ba5576000839052610ba590600080516020610c538339815191529081019083016102e8565b5090565b50505050818302600060005081815481835581811511610b5a57601f016020900481601f01602090048360005260206000209182019101610b5a91906102e8565b6001805483908110156100025760008281528254600080516020610c73833981519152929092015493509190849081101561000257600080516020610c73833981519152018290555060405133600160a060020a03169190839082818181858883f150610879935050505056405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5aceb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6";

  if ("0x3937461e2d953c0f28d83911ffae708a26b4ee18" != "") {
    Game.address = "0x3937461e2d953c0f28d83911ffae708a26b4ee18";

    // Backward compatibility; Deprecated.
    Game.deployed_address = "0x3937461e2d953c0f28d83911ffae708a26b4ee18";
  }

  Game.generated_with = "1.0.2";
  Game.contract_name = "Game";

  return Game;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Game = factory;
}