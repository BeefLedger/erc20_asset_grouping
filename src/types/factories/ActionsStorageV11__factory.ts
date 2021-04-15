/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ActionsStorageV11 } from "../ActionsStorageV11";

export class ActionsStorageV11__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ActionsStorageV11> {
    return super.deploy(overrides || {}) as Promise<ActionsStorageV11>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ActionsStorageV11 {
    return super.attach(address) as ActionsStorageV11;
  }
  connect(signer: Signer): ActionsStorageV11__factory {
    return super.connect(signer) as ActionsStorageV11__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ActionsStorageV11 {
    return new Contract(address, _abi, signerOrProvider) as ActionsStorageV11;
  }
}

const _abi = [
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
    inputs: [
      {
        internalType: "uint256",
        name: "_entry",
        type: "uint256",
      },
    ],
    name: "approveProduce",
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
    name: "dataByEntry",
    outputs: [
      {
        internalType: "enum ActionsStorageV1_0.Actions",
        name: "entryType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "company",
        type: "address",
      },
      {
        internalType: "address",
        name: "signatorie",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "required",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "requiresMultisig",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "inputOf",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outputOf",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_uids",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_required",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_allowedCompanies",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_outputOf",
        type: "uint256",
      },
    ],
    name: "dropOff",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "entriesByCompany",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "entriesByUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCompaniesContract",
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
        name: "_company",
        type: "address",
      },
    ],
    name: "getEntriesByCompany",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getEntriesByUser",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_entry",
        type: "uint256",
      },
    ],
    name: "getEntryData",
    outputs: [
      {
        internalType: "enum ActionsStorageV1_0.Actions",
        name: "",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_entry",
        type: "uint256",
      },
    ],
    name: "getNumOfValidations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getResourceActionsContract",
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
        name: "_entry",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pos",
        type: "uint256",
      },
    ],
    name: "getValidation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "self",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "indexOf",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_multiSigWallet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_erc721",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_uids",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_required",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_companies",
        type: "address[]",
      },
    ],
    name: "measure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        internalType: "uint256[]",
        name: "_uids",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_required",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_allowedCompanies",
        type: "address[]",
      },
    ],
    name: "pickUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pos",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_uids",
        type: "uint256[]",
      },
    ],
    name: "produce",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_resourceActions",
        type: "address",
      },
    ],
    name: "setResourceActionsContract",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_entry",
        type: "uint256",
      },
    ],
    name: "userCanValidate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_entry",
        type: "uint256",
      },
    ],
    name: "userHasValidated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_entry",
        type: "uint256",
      },
    ],
    name: "validateEntry",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "validations",
    outputs: [
      {
        internalType: "address",
        name: "company",
        type: "address",
      },
      {
        internalType: "address",
        name: "signatorie",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "verifiedEntry",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc721",
        type: "address",
      },
    ],
    name: "initializeV11",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc721",
        type: "address",
      },
    ],
    name: "setERC721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getERC721Contract",
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
];

const _bytecode =
  "0x6080604052600060095534801561001557600080fd5b5061001f33610024565b610046565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b61319480620000566000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80639fce5c8e11610104578063c56551b6116100a2578063f2fde38b11610071578063f2fde38b14610aa7578063f7c8941f14610acd578063fdc34d2a14610b6e578063fe07ba4f14610b9a576101cf565b8063c56551b614610a4e578063c98f81ab14610a56578063d85e030c14610a5e578063e2146de814610a8a576101cf565b8063ad723673116100de578063ad72367314610925578063b326b8251461099b578063b6f8aa9a14610a20578063c47d01a514610a46576101cf565b80639fce5c8e14610710578063a2b2e7ee146107d2578063a6039fbd146108ff576101cf565b8063612d16b21161017157806385b5450d1161014b57806385b5450d1461066d5780638da5cb5b146106ab5780639a8d78f6146106b35780639aa4de26146106f3576101cf565b8063612d16b2146103f35780637f4d3156146104175780637f59e08f14610542576101cf565b806331ee488b116101ad57806331ee488b1461026657806346e594c91461028c578063485cc955146103a25780634b5a82d1146103d0576101cf565b8063094144a5146101d457806328d011fe146101fc5780632deda9fb14610249575b600080fd5b6101fa600480360360208110156101ea57600080fd5b50356001600160a01b0316610bb7565b005b61021f6004803603604081101561021257600080fd5b5080359060200135610c9d565b604080516001600160a01b0394851681529290931660208301528183015290519081900360600190f35b6101fa6004803603602081101561025f57600080fd5b5035610d1a565b6101fa6004803603602081101561027c57600080fd5b50356001600160a01b0316611009565b6102a9600480360360208110156102a257600080fd5b5035611171565b604051808c60098111156102b957fe5b81526020018b6001600160a01b031681526020018a6001600160a01b0316815260200180602001898152602001888152602001806020018715158152602001861515815260200185815260200184815260200183810383528b818151815260200191508051906020019060200280838360005b8381101561034457818101518382015260200161032c565b50505050905001838103825288818151815260200191508051906020019060200280838360005b8381101561038357818101518382015260200161036b565b505050509050019d505050505050505050505050505060405180910390f35b6101fa600480360360408110156103b857600080fd5b506001600160a01b038135811691602001351661136a565b61021f600480360360408110156103e657600080fd5b50803590602001356114ad565b6103fb6114f7565b604080516001600160a01b039092168252519081900360200190f35b6101fa6004803603606081101561042d57600080fd5b810190602081018135600160201b81111561044757600080fd5b82018360208201111561045957600080fd5b803590602001918460208302840111600160201b8311171561047a57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092958435959094909350604081019250602001359050600160201b8111156104d157600080fd5b8201836020820111156104e357600080fd5b803590602001918460208302840111600160201b8311171561050457600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061150b945050505050565b6101fa6004803603606081101561055857600080fd5b810190602081018135600160201b81111561057257600080fd5b82018360208201111561058457600080fd5b803590602001918460208302840111600160201b831117156105a557600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092958435959094909350604081019250602001359050600160201b8111156105fc57600080fd5b82018360208201111561060e57600080fd5b803590602001918460208302840111600160201b8311171561062f57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611869945050505050565b6106996004803603604081101561068357600080fd5b506001600160a01b038135169060200135611a38565b60408051918252519081900360200190f35b6103fb611a66565b6106df600480360360408110156106c957600080fd5b506001600160a01b038135169060200135611a75565b604080519115158252519081900360200190f35b6106996004803603602081101561070957600080fd5b5035611aa3565b6107bc6004803603604081101561072657600080fd5b810190602081018135600160201b81111561074057600080fd5b82018360208201111561075257600080fd5b803590602001918460208302840111600160201b8311171561077357600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550505090356001600160a01b03169150611ab59050565b6040805160ff9092168252519081900360200190f35b6101fa600480360360808110156107e857600080fd5b810190602081018135600160201b81111561080257600080fd5b82018360208201111561081457600080fd5b803590602001918460208302840111600160201b8311171561083557600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092958435959094909350604081019250602001359050600160201b81111561088c57600080fd5b82018360208201111561089e57600080fd5b803590602001918460208302840111600160201b831117156108bf57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505091359250611b0e915050565b6101fa6004803603602081101561091557600080fd5b50356001600160a01b0316611c4b565b61094b6004803603602081101561093b57600080fd5b50356001600160a01b0316611d3a565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561098757818101518382015260200161096f565b505050509050019250505060405180910390f35b6109b8600480360360208110156109b157600080fd5b5035611da6565b604051808a60098111156109c857fe5b81526001600160a01b03998a166020820152979098166040808901919091526060880196909652608087019490945291151560a0860152151560c085015260e084015261010083015251908190036101200192509050f35b61094b60048036036020811015610a3657600080fd5b50356001600160a01b0316611e03565b6103fb611e6d565b610699611e7c565b6103fb611e82565b61069960048036036040811015610a7457600080fd5b506001600160a01b038135169060200135611e91565b6101fa60048036036020811015610aa057600080fd5b5035611eaa565b6101fa60048036036020811015610abd57600080fd5b50356001600160a01b0316611fe6565b6101fa60048036036020811015610ae357600080fd5b810190602081018135600160201b811115610afd57600080fd5b820183602082011115610b0f57600080fd5b803590602001918460208302840111600160201b83111715610b3057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506120f3945050505050565b6106df60048036036040811015610b8457600080fd5b506001600160a01b03813516906020013561240d565b6106df60048036036020811015610bb057600080fd5b503561242d565b610bbf611a66565b6001600160a01b0316336001600160a01b031614610c1a576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6001600160a01b038116610c75576040805162461bcd60e51b815260206004820152601b60248201527f45524337323120636f6e74726163742063616e6e6f7420626520300000000000604482015290519081900360640190fd5b600a80546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b6000806000610caa612eda565b6000868152600460205260409020805486908110610cc457fe5b60009182526020918290206040805160608101825260039390930290910180546001600160a01b039081168085526001830154909116948401859052600290910154929091018290529891975095509350505050565b33610d24816125f3565b610d5f5760405162461bcd60e51b81526004018080602001828103825260278152602001806130c16027913960400191505060405180910390fd5b33600090815260056020908152604080832085845290915290205460ff1615610dcf576040805162461bcd60e51b815260206004820152601760248201527f557365722068617320616c7265616479207369676e6564000000000000000000604482015290519081900360640190fd5b6000610dda33612676565b9050610de4612efa565b60008481526008602052604090819020815161016081019092528054829060ff166009811115610e1057fe5b6009811115610e1b57fe5b815281546001600160a01b03610100909104811660208084019190915260018401549091166040808401919091526002840180548251818502810185019093528083526060909401939192909190830182828015610e9857602002820191906000526020600020905b815481526020019060010190808311610e84575b50505050508152602001600382015481526020016004820154815260200160058201805480602002602001604051908101604052809291908181526020018280548015610f0e57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610ef0575b5050509183525050600682015460ff8082161515602084015261010090910416151560408201526007820154606082015260089091015460809091015260c08101519091506000610f5f8285611ab5565b60ff161061100257600085815260046020908152604080832081516060810183526001600160a01b0380891682523382860181815242848701908152855460018181018855968a52888a209551600390910290950180549585166001600160a01b031996871617815591518287018054919095169516949094179092559151600290910155845260058352818420898552909252909120805460ff191690911790555b5050505050565b611011611a66565b6001600160a01b0316336001600160a01b03161461106c576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6001600160a01b0381166110c7576040805162461bcd60e51b815260206004820152601e60248201527f436f6d70616e69657320636f6e74726163742063616e6e6f7420626520300000604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0383811691909117918290556040805163c47d01a560e01b81529051929091169163c47d01a591600480820192602092909190829003018186803b15801561112357600080fd5b505afa158015611137573d6000803e3d6000fd5b505050506040513d602081101561114d57600080fd5b5051600380546001600160a01b0319166001600160a01b0390921691909117905550565b60008060006060600080606060008060008061118b612efa565b60008d81526008602052604090819020815161016081019092528054829060ff1660098111156111b757fe5b60098111156111c257fe5b815281546001600160a01b0361010090910481166020808401919091526001840154909116604080840191909152600284018054825181850281018501909352808352606090940193919290919083018282801561123f57602002820191906000526020600020905b81548152602001906001019080831161122b575b505050505081526020016003820154815260200160048201548152602001600582018054806020026020016040519081016040528092919081815260200182805480156112b557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611297575b505050505081526020016006820160009054906101000a900460ff161515151581526020016006820160019054906101000a900460ff16151515158152602001600782015481526020016008820154815250509050806000015181602001518260400151836060015184608001518560a001518660c001518760e001518861010001518961012001518a61014001519b509b509b509b509b509b509b509b509b509b509b505091939597999b90929496989a50565b600a5460ff16156113c2576040805162461bcd60e51b815260206004820152601b60248201527f636f6e7261637420616c726561647920696e697469616c697a65640000000000604482015290519081900360640190fd5b6001600160a01b03821661141d576040805162461bcd60e51b815260206004820152601d60248201527f4d756c746973696720636f6e74726163742063616e6e6f742062652030000000604482015290519081900360640190fd5b6001600160a01b038116611478576040805162461bcd60e51b815260206004820152601b60248201527f45524337323120636f6e74726163742063616e6e6f7420626520300000000000604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b03831617905561149c826126c7565b5050600a805460ff19166001179055565b600460205281600052604060002081815481106114c657fe5b60009182526020909120600390910201805460018201546002909201546001600160a01b0391821694509116915083565b600a5461010090046001600160a01b031690565b33611515816125f3565b6115505760405162461bcd60e51b81526004018080602001828103825260278152602001806130c16027913960400191505060405180910390fd5b6115586126e9565b61159a576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b60008451116115e3576040805162461bcd60e51b815260206004820152601060248201526f139bc81d5a591cc81c1c9bdd9a59195960821b604482015290519081900360640190fd5b600083116116225760405162461bcd60e51b815260040180806020018281038252602a815260200180613097602a913960400191505060405180910390fd5b60008251116116625760405162461bcd60e51b81526004018080602001828103825260298152602001806131366029913960400191505060405180910390fd5b600061166d33612676565b90506001600160a01b0381166116b8576040805162461bcd60e51b815260206004820152601b60248201526000805160206130e8833981519152604482015290519081900360640190fd5b6009805460019081018083556001600160a01b03841660008181526006602090815260408083208054808801825590845282842001949094553380835260078252848320875481548089018355918552838520909101558451610160810186528781528083019490945283850152606083018b905242608084015260a083018a905260c0830189905260e0830182905261010083018290526101208301829052610140830182905285548252600890529190912081518154929491939092849260ff19919091169190849081111561178c57fe5b02179055506020828101518254610100600160a81b0319166101006001600160a01b039283160217835560408401516001840180546001600160a01b03191691909216179055606083015180516117e99260028501920190612f6b565b506080820151600382015560a0820151600482015560c08201518051611819916005840191602090910190612fb6565b5060e08201516006820180546101008086015115150261ff001993151560ff1990921691909117929092169190911790556101208201516007820155610140909101516008909101555050505050565b33611873816125f3565b6118ae5760405162461bcd60e51b81526004018080602001828103825260278152602001806130c16027913960400191505060405180910390fd5b6118b66127e9565b6118f8576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b600061190333612676565b90506001600160a01b03811661194e576040805162461bcd60e51b815260206004820152601b60248201526000805160206130e8833981519152604482015290519081900360640190fd5b60008551116119a4576040805162461bcd60e51b815260206004820152601960248201527f6e6f207265736f757263657320746f207472616e73706f727400000000000000604482015290519081900360640190fd5b60005b8551811015611a26576119cd828783815181106119c057fe5b6020026020010151612836565b611a1e576040805162461bcd60e51b815260206004820152601a60248201527f546f6b656e204f776e6572206973206e6f7420636f6d70616e79000000000000604482015290519081900360640190fd5b6001016119a7565b506110028160018787876000806128d8565b60076020528160005260406000208181548110611a5157fe5b90600052602060002001600091509150505481565b6000546001600160a01b031690565b6001600160a01b038216600090815260056020908152604080832084845290915290205460ff165b92915050565b60009081526004602052604090205490565b6000805b83518160ff1611611b0357826001600160a01b0316848260ff1681518110611add57fe5b60200260200101516001600160a01b03161415611afb579050611a9d565b600101611ab9565b506000199392505050565b33611b18816125f3565b611b535760405162461bcd60e51b81526004018080602001828103825260278152602001806130c16027913960400191505060405180910390fd5b60008211611b925760405162461bcd60e51b815260040180806020018281038252602181526020018061304c6021913960400191505060405180910390fd5b611b9a612e42565b611bdc576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b6000611be733612676565b90506001600160a01b038116611c32576040805162461bcd60e51b815260206004820152601b60248201526000805160206130e8833981519152604482015290519081900360640190fd5b611c438160028888886000896128d8565b505050505050565b600a54600160a81b900460ff1615611caa576040805162461bcd60e51b815260206004820152601960248201527f636f6e747261637420616c726561647920757067726164656400000000000000604482015290519081900360640190fd5b6001600160a01b038116611d05576040805162461bcd60e51b815260206004820152601b60248201527f45524337323120636f6e74726163742063616e6e6f7420626520300000000000604482015290519081900360640190fd5b600a805460ff60a81b196001600160a01b0390931661010002610100600160a81b03199091161791909116600160a81b179055565b6001600160a01b038116600090815260076020908152604091829020805483518184028101840190945280845260609392830182828015611d9a57602002820191906000526020600020905b815481526020019060010190808311611d86575b50505050509050919050565b6008602081905260009182526040909120805460018201546003830154600484015460068501546007860154959096015460ff808616976001600160a01b0361010097889004811698961696949593948183169491049091169189565b6001600160a01b038116600090815260066020908152604091829020805483518184028101840190945280845260609392830182828015611d9a5760200282019190600052602060002090815481526020019060010190808311611d865750505050509050919050565b6003546001600160a01b031690565b60095481565b6001546001600160a01b031690565b60066020528160005260406000208181548110611a5157fe5b611eb2611a66565b6001600160a01b0316336001600160a01b031614611f0d576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b60008181526008602052604090206006810154610100900460ff1615611f7a576040805162461bcd60e51b815260206004820152601f60248201527f456e7472792068617320616c7265616479206265656e20617070726f76656400604482015290519081900360640190fd5b600681015460ff16611fd3576040805162461bcd60e51b815260206004820181905260248201527f4d756c746973696720617070726f7665206973206e6f74207265717569726564604482015290519081900360640190fd5b600601805461ff00191661010017905550565b611fee611a66565b6001600160a01b0316336001600160a01b031614612049576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6001600160a01b03811661209c576040805162461bcd60e51b815260206004820152601560248201527406e6577206f776e65722063616e6e6f74206265203605c1b604482015290519081900360640190fd5b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e06120c5611a66565b604080516001600160a01b03928316815291841660208301528051918290030190a16120f0816126c7565b50565b336120fd816125f3565b6121385760405162461bcd60e51b81526004018080602001828103825260278152602001806130c16027913960400191505060405180910390fd5b612140612e8d565b612182576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b60008251116121cb576040805162461bcd60e51b815260206004820152601060248201526f139bc81d5a591cc81c1c9bdd9a59195960821b604482015290519081900360640190fd5b60006121d633612676565b90506001600160a01b038116612221576040805162461bcd60e51b815260206004820152601b60248201526000805160206130e8833981519152604482015290519081900360640190fd5b60408051600180825281830190925260609160208083019080368337019050509050818160008151811061225157fe5b6001600160a01b0392831660209182029290920181019190915260098054600190810180835593861660008181526006855260408082208054808601825590835286832001969096553380825260078652868220855481548087018355918452878420909101558651610160810188528281528087019390935282870152606082018a905242608083015260a0820183905260c0820187905260e08201839052610100820181905261012082018190526101408201819052835481526008909452939092208351815491939092849260ff19169190849081111561233157fe5b02179055506020828101518254610100600160a81b0319166101006001600160a01b039283160217835560408401516001840180546001600160a01b031916919092161790556060830151805161238e9260028501920190612f6b565b506080820151600382015560a0820151600482015560c082015180516123be916005840191602090910190612fb6565b5060e08201516006820180546101008086015115150261ff001993151560ff19909216919091179290921691909117905561012082015160078201556101409091015160089091015550505050565b600560209081526000928352604080842090915290825290205460ff1681565b60008061243933612676565b9050612443612efa565b60008481526008602052604090819020815161016081019092528054829060ff16600981111561246f57fe5b600981111561247a57fe5b815281546001600160a01b036101009091048116602080840191909152600184015490911660408084019190915260028401805482518185028101850190935280835260609094019391929091908301828280156124f757602002820191906000526020600020905b8154815260200190600101908083116124e3575b5050505050815260200160038201548152602001600482015481526020016005820180548060200260200160405190810160405280929190818152602001828054801561256d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161254f575b5050509183525050600682015460ff8082161515602084015261010090910416151560408201526007820154606082015260089091015460809091015260c081015190915060006125be8285611ab5565b60ff16101580156125ea575033600090815260056020908152604080832088845290915290205460ff16155b95945050505050565b60035460408051636c88a12f60e01b81526001600160a01b03848116600483015291516000939290921691636c88a12f91602480820192602092909190829003018186803b15801561264457600080fd5b505afa158015612658573d6000803e3d6000fd5b505050506040513d602081101561266e57600080fd5b505192915050565b60035460408051631401835d60e11b81526001600160a01b0384811660048301529151600093929092169163280306ba91602480820192602092909190829003018186803b15801561264457600080fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60015460408051631f5a18ad60e31b815290516000926001600160a01b031691636034c19991839163fad0c568916004808301926020929190829003018186803b15801561273657600080fd5b505afa15801561274a573d6000803e3d6000fd5b505050506040513d602081101561276057600080fd5b50516040516001600160e01b031960e084901b16815233906004018083600981111561278857fe5b8152602001826001600160a01b031681526020019250505060206040518083038186803b1580156127b857600080fd5b505afa1580156127cc573d6000803e3d6000fd5b505050506040513d60208110156127e257600080fd5b5051905090565b600154604080516366f00f7960e11b815290516000926001600160a01b031691636034c19991839163cde01ef2916004808301926020929190829003018186803b15801561273657600080fd5b6000826001600160a01b0316600a60019054906101000a90046001600160a01b03166001600160a01b031663c41a360a846040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561289b57600080fd5b505afa1580156128af573d6000803e3d6000fd5b505050506040513d60208110156128c557600080fd5b50516001600160a01b0316149392505050565b6000855111612921576040805162461bcd60e51b815260206004820152601060248201526f139bc81d5a591cc81c1c9bdd9a59195960821b604482015290519081900360640190fd5b600184116129605760405162461bcd60e51b815260040180806020018281038252602a81526020018061306d602a913960400191505060405180910390fd5b60008351116129a05760405162461bcd60e51b81526004018080602001828103825260298152602001806131366029913960400191505060405180910390fd5b6009805460019081018083556001600160a01b038a16600090815260066020908152604080832080548087018255908452828420019390935533825260078152828220855481549586018255908352912090920191909155805161016081019091529081908890811115612a1057fe5b8152602001886001600160a01b03168152602001336001600160a01b031681526020018681526020014281526020018581526020018481526020016000151581526020016000151581526020018381526020018281525060086000600954815260200190815260200160002060008201518160000160006101000a81548160ff02191690836009811115612aa057fe5b02179055506020828101518254610100600160a81b0319166101006001600160a01b039283160217835560408401516001840180546001600160a01b0319169190921617905560608301518051612afd9260028501920190612f6b565b506080820151600382015560a0820151600482015560c08201518051612b2d916005840191602090910190612fb6565b5060e08201516006820180546101008086015115150261ff001993151560ff1990921691909117929092169190911790556101208201516007820155610140909101516008909101558015612e39578460405160200180828051906020019060200280838360005b83811015612bad578181015183820152602001612b95565b505050509050019150506040516020818303038152906040528051906020012060086000838152602001908152602001600020600201604051602001808280548015612c1857602002820191906000526020600020905b815481526020019060010190808311612c04575b50509150506040516020818303038152906040528051906020012014612c79576040805162461bcd60e51b815260206004820152601160248201527055696473206e6f74206d61746368696e6760781b604482015290519081900360640190fd5b600160008281526008602052604090205460ff166009811115612c9857fe5b14612ce3576040805162461bcd60e51b81526020600482015260166024820152750456e7472792073686f756c64206265205069636b55760541b604482015290519081900360640190fd5b60008181526008602052604090206007015415612d47576040805162461bcd60e51b815260206004820152601760248201527f696e7075744f6620616c726561647920646566696e6564000000000000000000604482015290519081900360640190fd5b6000805b600083815260086020526040902060050154811015612db957600083815260086020526040902060050180546001600160a01b038b16919083908110612d8d57fe5b6000918252602090912001546001600160a01b03161415612db15760019150612db9565b600101612d4b565b5080612df65760405162461bcd60e51b815260040180806020018281038252602e815260200180613108602e913960400191505060405180910390fd5b506009546000828152600860209081526040808320600781018590555461010090046001600160a01b031683526006825282208054600181018255908352912001555b50505050505050565b60015460408051621df0af60e01b815290516000926001600160a01b031691636034c199918391621df0af916004808301926020929190829003018186803b15801561273657600080fd5b6001546040805163aae1edb560e01b815290516000926001600160a01b031691636034c19991839163aae1edb5916004808301926020929190829003018186803b15801561273657600080fd5b604080516060810182526000808252602082018190529181019190915290565b604080516101608101909152806000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016060815260200160008152602001600081526020016060815260200160001515815260200160001515815260200160008152602001600081525090565b828054828255906000526020600020908101928215612fa6579160200282015b82811115612fa6578251825591602001919060010190612f8b565b50612fb2929150613017565b5090565b82805482825590600052602060002090810192821561300b579160200282015b8281111561300b57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190612fd6565b50612fb292915061302c565b5b80821115612fb25760008155600101613018565b5b80821115612fb25780546001600160a01b031916815560010161302d56fe43616e6e6f742064726f706f666620776974686f7574207069636b696e672075705265717569726564207369676e617475726573206d7573742062652067726561746572207468616e20315265717569726564207369676e617475726573206d7573742062652067726561746572207468616e20304f6e6c7920436f6d70616e792063616e20706572666f726d2074686973206f7065726174696f6e436f6d70616e7920616464726573732063616e6e6f7420626520300000000000436f6d70616e79206973206e6f7420616c6c6f77656420746f20706572666f726d20746869732064726f704f6666526571756972656420636f6d70616e696573206d7573742062652067726561746572207468616e2030a26469706673582212206b75592633953c65747ddb8d4eae46f0c7d8248c27a20aea7d8434b6a6845d6a64736f6c63430007000033";
