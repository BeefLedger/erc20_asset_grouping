/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC20Factory } from "../ERC20Factory";

export class ERC20Factory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC20Factory> {
    return super.deploy(overrides || {}) as Promise<ERC20Factory>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Factory {
    return super.attach(address) as ERC20Factory;
  }
  connect(signer: Signer): ERC20Factory__factory {
    return super.connect(signer) as ERC20Factory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Factory {
    return new Contract(address, _abi, signerOrProvider) as ERC20Factory;
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
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b611a428061007d6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80634f64b2be1461005c578063715018a6146100955780638da5cb5b1461009f578063960546da146100a7578063f2fde38b146101db575b600080fd5b6100796004803603602081101561007257600080fd5b5035610201565b604080516001600160a01b039092168252519081900360200190f35b61009d610228565b005b6100796102dc565b61009d600480360360608110156100bd57600080fd5b813591908101906040810160208201356401000000008111156100df57600080fd5b8201836020820111156100f157600080fd5b8035906020019184600183028401116401000000008311171561011357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561016657600080fd5b82018360208201111561017857600080fd5b8035906020019184600183028401116401000000008311171561019a57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506102eb945050505050565b61009d600480360360208110156101f157600080fd5b50356001600160a01b0316610542565b6001818154811061020e57fe5b6000918252602090912001546001600160a01b0316905081565b61023061064c565b6000546001600160a01b03908116911614610292576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6102f361064c565b6000546001600160a01b03908116911614610355576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600083838360405161036690610650565b808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156103aa578181015183820152602001610392565b50505050905090810190601f1680156103d75780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561040a5781810151838201526020016103f2565b50505050905090810190601f1680156104375780820380516001836020036101000a031916815260200191505b5095505050505050604051809103906000f08015801561045b573d6000803e3d6000fd5b509050806001600160a01b031663f2fde38b336040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b1580156104ad57600080fd5b505af11580156104c1573d6000803e3d6000fd5b505060018054808201825560009182527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0386169081179091556040513394509092507f980a7521e53c57d6fa4cc255aefad14c263caf4a1651ee5de1cff5b00a30d7d09190a350505050565b61054a61064c565b6000546001600160a01b039081169116146105ac576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166105f15760405162461bcd60e51b81526004018080602001828103825260268152602001806119e76026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6113898061065e8339019056fe60806040526006805461ff00191690553480156200001c57600080fd5b506040516200138938038062001389833981810160405260608110156200004257600080fd5b8151602083018051604051929492938301929190846401000000008211156200006a57600080fd5b9083019060208201858111156200008057600080fd5b82516401000000008111828201881017156200009b57600080fd5b82525081516020918201929091019080838360005b83811015620000ca578181015183820152602001620000b0565b50505050905090810190601f168015620000f85780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011c57600080fd5b9083019060208201858111156200013257600080fd5b82516401000000008111828201881017156200014d57600080fd5b82525081516020918201929091019080838360005b838110156200017c57818101518382015260200162000162565b50505050905090810190601f168015620001aa5780820380516001836020036101000a031916815260200191505b5060405250505081816000620001c5620002a860201b60201c565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350815162000224906004906020850190620002ac565b5080516200023a906005906020840190620002ac565b50506006805460ff1916601217905550826200029d576040805162461bcd60e51b815260206004820152601460248201527f436861696e2049442063616e6e6f742062652030000000000000000000000000604482015290519081900360640190fd5b505060075562000348565b3390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002ef57805160ff19168380011785556200031f565b828001600101855582156200031f579182015b828111156200031f57825182559160200191906001019062000302565b506200032d92915062000331565b5090565b5b808211156200032d576000815560010162000332565b61103180620003586000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a25780639a8a0592116100715780639a8a059214610328578063a457c2d714610330578063a9059cbb1461035c578063dd62ed3e14610388578063f2fde38b146103b657610116565b806370a08231146102ea578063715018a6146103105780638da5cb5b1461031857806395d89b411461032057610116565b80631d01164d116100e95780631d01164d1461021a57806323b872dd1461023e578063313ce56714610274578063395093511461029257806340c10f19146102be57610116565b806306fdde031461011b578063095ea7b31461019857806314f08179146101d857806318160ddd14610200575b600080fd5b6101236103dc565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015d578181015183820152602001610145565b50505050905090810190601f16801561018a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101c4600480360360408110156101ae57600080fd5b506001600160a01b038135169060200135610472565b604080519115158252519081900360200190f35b6101fe600480360360208110156101ee57600080fd5b50356001600160a01b031661048f565b005b610208610556565b60408051918252519081900360200190f35b61022261055c565b604080516001600160a01b039092168252519081900360200190f35b6101c46004803603606081101561025457600080fd5b506001600160a01b03813581169160208101359091169060400135610571565b61027c6105f8565b6040805160ff9092168252519081900360200190f35b6101c4600480360360408110156102a857600080fd5b506001600160a01b038135169060200135610601565b6101fe600480360360408110156102d457600080fd5b506001600160a01b03813516906020013561064f565b6102086004803603602081101561030057600080fd5b50356001600160a01b0316610762565b6101fe61077d565b61022261081f565b61012361082e565b61020861088f565b6101c46004803603604081101561034657600080fd5b506001600160a01b038135169060200135610895565b6101c46004803603604081101561037257600080fd5b506001600160a01b0381351690602001356108fd565b6102086004803603604081101561039e57600080fd5b506001600160a01b0381358116916020013516610911565b6101fe600480360360208110156103cc57600080fd5b50356001600160a01b031661093c565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104685780601f1061043d57610100808354040283529160200191610468565b820191906000526020600020905b81548152906001019060200180831161044b57829003601f168201915b5050505050905090565b600061048661047f610a34565b8484610a38565b50600192915050565b610497610a34565b6000546001600160a01b039081169116146104e7576040805162461bcd60e51b81526020600482018190526024820152600080516020610f4c833981519152604482015290519081900360640190fd5b6001600160a01b03811661052c5760405162461bcd60e51b8152600401808060200182810382526022815260200180610fb56022913960400191505060405180910390fd5b600680546001600160a01b03909216620100000262010000600160b01b0319909216919091179055565b60035490565b6006546201000090046001600160a01b031681565b600061057e848484610b24565b6105ee8461058a610a34565b6105e985604051806060016040528060288152602001610f24602891396001600160a01b038a166000908152600260205260408120906105c8610a34565b6001600160a01b031681526020810191909152604001600020549190610c81565b610a38565b5060019392505050565b60065460ff1690565b600061048661060e610a34565b846105e9856002600061061f610a34565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610d18565b610657610a34565b6000546001600160a01b039081169116146106a7576040805162461bcd60e51b81526020600482018190526024820152600080516020610f4c833981519152604482015290519081900360640190fd5b600654610100900460ff16156106fc576040805162461bcd60e51b815260206004820152601560248201527443616e74206d696e74206d6f726520746f6b656e7360581b604482015290519081900360640190fd5b6006546201000090046001600160a01b03166107495760405162461bcd60e51b8152600401808060200182810382526022815260200180610e946022913960400191505060405180910390fd5b6006805461ff001916905561075e8282610d79565b5050565b6001600160a01b031660009081526001602052604090205490565b610785610a34565b6000546001600160a01b039081169116146107d5576040805162461bcd60e51b81526020600482018190526024820152600080516020610f4c833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104685780601f1061043d57610100808354040283529160200191610468565b60075481565b60006104866108a2610a34565b846105e985604051806060016040528060258152602001610fd760259139600260006108cc610a34565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610c81565b600061048661090a610a34565b8484610b24565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b610944610a34565b6000546001600160a01b03908116911614610994576040805162461bcd60e51b81526020600482018190526024820152600080516020610f4c833981519152604482015290519081900360640190fd5b6001600160a01b0381166109d95760405162461bcd60e51b8152600401808060200182810382526026815260200180610eb66026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6001600160a01b038316610a7d5760405162461bcd60e51b8152600401808060200182810382526024815260200180610f916024913960400191505060405180910390fd5b6001600160a01b038216610ac25760405162461bcd60e51b8152600401808060200182810382526022815260200180610edc6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610b695760405162461bcd60e51b8152600401808060200182810382526025815260200180610f6c6025913960400191505060405180910390fd5b6001600160a01b038216610bae5760405162461bcd60e51b8152600401808060200182810382526023815260200180610e716023913960400191505060405180910390fd5b610bb9838383610e6b565b610bf681604051806060016040528060268152602001610efe602691396001600160a01b0386166000908152600160205260409020549190610c81565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610c259082610d18565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610d105760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610cd5578181015183820152602001610cbd565b50505050905090810190601f168015610d025780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610d72576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b038216610dd4576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610de060008383610e6b565b600354610ded9082610d18565b6003556001600160a01b038216600090815260016020526040902054610e139082610d18565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737341737365742067726f7570696e672061646472657373206e6f7420796574207365744f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657245524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737341737365742067726f7570696e67206164647265737320616c72656164792073657445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220527dfd2c7a7da230d7205a116bd094e2f09f799bf3c85af7bcc43812ba940e8264736f6c634300060c00334f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a2646970667358221220003664e3cebb8689ac38359bebc21f124ef164e9951fb7a55c2b69fef173a50964736f6c634300060c0033";
