/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC20FactoryV10 } from "../ERC20FactoryV10";

export class ERC20FactoryV10__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC20FactoryV10> {
    return super.deploy(overrides || {}) as Promise<ERC20FactoryV10>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20FactoryV10 {
    return super.attach(address) as ERC20FactoryV10;
  }
  connect(signer: Signer): ERC20FactoryV10__factory {
    return super.connect(signer) as ERC20FactoryV10__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20FactoryV10 {
    return new Contract(address, _abi, signerOrProvider) as ERC20FactoryV10;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NewERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokens",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "deploy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b610041565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6119d3806100506000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80634f64b2be146100675780638129fc1c146100a05780638da5cb5b146100aa578063960546da146100b2578063aa6ca808146101e6578063f2fde38b1461023e575b600080fd5b6100846004803603602081101561007d57600080fd5b5035610264565b604080516001600160a01b039092168252519081900360200190f35b6100a861028b565b005b6100846102f2565b6100a8600480360360608110156100c857600080fd5b813591908101906040810160208201356401000000008111156100ea57600080fd5b8201836020820111156100fc57600080fd5b8035906020019184600183028401116401000000008311171561011e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561017157600080fd5b82018360208201111561018357600080fd5b803590602001918460018302840111640100000000831117156101a557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610301945050505050565b6101ee610551565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561022a578181015183820152602001610212565b505050509050019250505060405180910390f35b6100a86004803603602081101561025457600080fd5b50356001600160a01b03166105b3565b6001818154811061027157fe5b6000918252602090912001546001600160a01b0316905081565b60025460ff16156102e3576040805162461bcd60e51b815260206004820152601b60248201527f636f6e7261637420616c726561647920696e697469616c697a65640000000000604482015290519081900360640190fd5b6002805460ff19166001179055565b6000546001600160a01b031690565b6103096102f2565b6001600160a01b0316336001600160a01b031614610364576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6000838383604051610375906106e2565b808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156103b95781810151838201526020016103a1565b50505050905090810190601f1680156103e65780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015610419578181015183820152602001610401565b50505050905090810190601f1680156104465780820380516001836020036101000a031916815260200191505b5095505050505050604051809103906000f08015801561046a573d6000803e3d6000fd5b509050806001600160a01b031663f2fde38b336040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b1580156104bc57600080fd5b505af11580156104d0573d6000803e3d6000fd5b505060018054808201825560009182527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0386169081179091556040513394509092507f980a7521e53c57d6fa4cc255aefad14c263caf4a1651ee5de1cff5b00a30d7d09190a350505050565b606060018054806020026020016040519081016040528092919081815260200182805480156105a957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161058b575b5050505050905090565b6105bb6102f2565b6001600160a01b0316336001600160a01b031614610616576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6001600160a01b038116610669576040805162461bcd60e51b815260206004820152601560248201527406e6577206f776e65722063616e6e6f74206265203605c1b604482015290519081900360640190fd5b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e06106926102f2565b604080516001600160a01b03928316815291841660208301528051918290030190a16106bd816106c0565b50565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6112ae806106f08339019056fe60806040526006805461ff00191690553480156200001c57600080fd5b50604051620012ae380380620012ae833981810160405260608110156200004257600080fd5b8151602083018051604051929492938301929190846401000000008211156200006a57600080fd5b9083019060208201858111156200008057600080fd5b82516401000000008111828201881017156200009b57600080fd5b82525081516020918201929091019080838360005b83811015620000ca578181015183820152602001620000b0565b50505050905090810190601f168015620000f85780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011c57600080fd5b9083019060208201858111156200013257600080fd5b82516401000000008111828201881017156200014d57600080fd5b82525081516020918201929091019080838360005b838110156200017c57818101518382015260200162000162565b50505050905090810190601f168015620001aa5780820380516001836020036101000a031916815260200191505b506040525050508181620001c4336200025d60201b60201c565b8151620001d99060049060208501906200027f565b508051620001ef9060059060208401906200027f565b50506006805460ff19166012179055508262000252576040805162461bcd60e51b815260206004820152601460248201527f436861696e2049442063616e6e6f742062652030000000000000000000000000604482015290519081900360640190fd5b50506007556200031b565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002c257805160ff1916838001178555620002f2565b82800160010185558215620002f2579182015b82811115620002f2578251825591602001919060010190620002d5565b506200030092915062000304565b5090565b5b8082111562000300576000815560010162000305565b610f83806200032b6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806340c10f19116100a25780639a8a0592116100715780639a8a059214610315578063a457c2d71461031d578063a9059cbb14610349578063dd62ed3e14610375578063f2fde38b146103a35761010b565b806340c10f19146102b357806370a08231146102df5780638da5cb5b1461030557806395d89b411461030d5761010b565b80631d01164d116100de5780631d01164d1461020f57806323b872dd14610233578063313ce5671461026957806339509351146102875761010b565b806306fdde0314610110578063095ea7b31461018d57806314f08179146101cd57806318160ddd146101f5575b600080fd5b6101186103c9565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015257818101518382015260200161013a565b50505050905090810190601f16801561017f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101b9600480360360408110156101a357600080fd5b506001600160a01b03813516906020013561045f565b604080519115158252519081900360200190f35b6101f3600480360360208110156101e357600080fd5b50356001600160a01b031661047c565b005b6101fd61054e565b60408051918252519081900360200190f35b610217610554565b604080516001600160a01b039092168252519081900360200190f35b6101b96004803603606081101561024957600080fd5b506001600160a01b03813581169160208101359091169060400135610569565b6102716105f0565b6040805160ff9092168252519081900360200190f35b6101b96004803603604081101561029d57600080fd5b506001600160a01b0381351690602001356105f9565b6101f3600480360360408110156102c957600080fd5b506001600160a01b038135169060200135610647565b6101fd600480360360208110156102f557600080fd5b50356001600160a01b0316610765565b610217610780565b61011861078f565b6101fd6107f0565b6101b96004803603604081101561033357600080fd5b506001600160a01b0381351690602001356107f6565b6101b96004803603604081101561035f57600080fd5b506001600160a01b03813516906020013561085e565b6101fd6004803603604081101561038b57600080fd5b506001600160a01b0381358116916020013516610872565b6101f3600480360360208110156103b957600080fd5b50356001600160a01b031661089d565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104555780601f1061042a57610100808354040283529160200191610455565b820191906000526020600020905b81548152906001019060200180831161043857829003601f168201915b5050505050905090565b600061047361046c6109aa565b84846109ae565b50600192915050565b610484610780565b6001600160a01b0316336001600160a01b0316146104df576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6001600160a01b0381166105245760405162461bcd60e51b8152600401808060200182810382526022815260200180610f076022913960400191505060405180910390fd5b600680546001600160a01b03909216620100000262010000600160b01b0319909216919091179055565b60035490565b6006546201000090046001600160a01b031681565b6000610576848484610a9a565b6105e6846105826109aa565b6105e185604051806060016040528060288152602001610e96602891396001600160a01b038a166000908152600260205260408120906105c06109aa565b6001600160a01b031681526020810191909152604001600020549190610bf7565b6109ae565b5060019392505050565b60065460ff1690565b60006104736106066109aa565b846105e185600260006106176109aa565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610c8e565b61064f610780565b6001600160a01b0316336001600160a01b0316146106aa576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b600654610100900460ff16156106ff576040805162461bcd60e51b815260206004820152601560248201527443616e74206d696e74206d6f726520746f6b656e7360581b604482015290519081900360640190fd5b6006546201000090046001600160a01b031661074c5760405162461bcd60e51b8152600401808060200182810382526022815260200180610e2c6022913960400191505060405180910390fd5b6006805461ff00191690556107618282610cef565b5050565b6001600160a01b031660009081526001602052604090205490565b6000546001600160a01b031690565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104555780601f1061042a57610100808354040283529160200191610455565b60075481565b60006104736108036109aa565b846105e185604051806060016040528060258152602001610f29602591396002600061082d6109aa565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610bf7565b600061047361086b6109aa565b8484610a9a565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6108a5610780565b6001600160a01b0316336001600160a01b031614610900576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6001600160a01b038116610953576040805162461bcd60e51b815260206004820152601560248201527406e6577206f776e65722063616e6e6f74206265203605c1b604482015290519081900360640190fd5b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e061097c610780565b604080516001600160a01b03928316815291841660208301528051918290030190a16109a781610de1565b50565b3390565b6001600160a01b0383166109f35760405162461bcd60e51b8152600401808060200182810382526024815260200180610ee36024913960400191505060405180910390fd5b6001600160a01b038216610a385760405162461bcd60e51b8152600401808060200182810382526022815260200180610e4e6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610adf5760405162461bcd60e51b8152600401808060200182810382526025815260200180610ebe6025913960400191505060405180910390fd5b6001600160a01b038216610b245760405162461bcd60e51b8152600401808060200182810382526023815260200180610e096023913960400191505060405180910390fd5b610b2f838383610e03565b610b6c81604051806060016040528060268152602001610e70602691396001600160a01b0386166000908152600160205260409020549190610bf7565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610b9b9082610c8e565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610c865760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c4b578181015183820152602001610c33565b50505050905090810190601f168015610c785780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610ce8576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b038216610d4a576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610d5660008383610e03565b600354610d639082610c8e565b6003556001600160a01b038216600090815260016020526040902054610d899082610c8e565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737341737365742067726f7570696e672061646472657373206e6f74207965742073657445524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737341737365742067726f7570696e67206164647265737320616c72656164792073657445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220b48a81e5806f459ee9f432e170642d6a906a0d384fa07922a5dbeee822fc4d2b64736f6c63430007000033a2646970667358221220fbdc639b94d2d10b9a9faaf72a14e34eea008d0dd38525c5030f6772fc3e2c7f64736f6c63430007000033";