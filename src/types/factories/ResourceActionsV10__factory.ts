/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ResourceActionsV10 } from "../ResourceActionsV10";

export class ResourceActionsV10__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ResourceActionsV10> {
    return super.deploy(overrides || {}) as Promise<ResourceActionsV10>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ResourceActionsV10 {
    return super.attach(address) as ResourceActionsV10;
  }
  connect(signer: Signer): ResourceActionsV10__factory {
    return super.connect(signer) as ResourceActionsV10__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ResourceActionsV10 {
    return new Contract(address, _abi, signerOrProvider) as ResourceActionsV10;
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
        internalType: "address",
        name: "_multisigWallet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_companies",
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
        internalType: "address",
        name: "_companies",
        type: "address",
      },
    ],
    name: "setCompaniesContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "_action",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_company",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_allow",
        type: "bool",
      },
    ],
    name: "setPermission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8[]",
        name: "_permissions",
        type: "uint8[]",
      },
      {
        internalType: "address",
        name: "_company",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_allow",
        type: "bool",
      },
    ],
    name: "setPermissions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "_action",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_signatorie",
        type: "address",
      },
    ],
    name: "getPermission",
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
    inputs: [],
    name: "getProduceAction",
    outputs: [
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getDropOffAction",
    outputs: [
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getPickUpAction",
    outputs: [
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getModifyAction",
    outputs: [
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getMoveAction",
    outputs: [
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransferCompleteAction",
    outputs: [
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getMeasureAction",
    outputs: [
      {
        internalType: "enum ResourceActionsV1_0.Actions",
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
        name: "_signatorie",
        type: "address",
      },
    ],
    name: "getPermissions",
    outputs: [
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
        internalType: "bool",
        name: "",
        type: "bool",
      },
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
    inputs: [],
    name: "getAllActions",
    outputs: [
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
      {
        internalType: "enum ResourceActionsV1_0.Actions",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b610041565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b610c48806100506000396000f3fe608060405234801561001057600080fd5b506004361061010a5760003560e01c806371a330f2116100a2578063c47d01a511610071578063c47d01a514610424578063cde01ef21461042c578063eae642a714610434578063f2fde38b1461045a578063fad0c568146104805761010a565b806371a330f2146102f65780638da5cb5b1461032d578063aae1edb514610351578063aea5df16146103595761010a565b8063160a7925116100de578063160a7925146101fd5780632bf0d61a1461027d578063485cc955146102855780636034c199146102b35761010a565b80621df0af1461010f578063047bc7d8146101385780630f6e00d4146101ed57806314ee5c64146101f5575b600080fd5b610117610488565b6040518082600981111561012757fe5b815260200191505060405180910390f35b6101eb6004803603606081101561014e57600080fd5b81019060208101813564010000000081111561016957600080fd5b82018360208201111561017b57600080fd5b8035906020019184602083028401116401000000008311171561019d57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550506001600160a01b038335169350505060200135151561048d565b005b6101176105c0565b6101176105c5565b6102236004803603602081101561021357600080fd5b50356001600160a01b03166105ca565b604080519a15158b5298151560208b0152961515898901529415156060890152921515608088015290151560a0870152151560c0860152151560e08501521515610100840152151561012083015251908190036101400190f35b610117610676565b6101eb6004803603604081101561029b57600080fd5b506001600160a01b038135811691602001351661067b565b6102e2600480360360408110156102c957600080fd5b50803560ff1690602001356001600160a01b03166107cb565b604080519115158252519081900360200190f35b6101eb6004803603606081101561030c57600080fd5b5060ff813516906001600160a01b036020820135169060400135151561081d565b610335610928565b604080516001600160a01b039092168252519081900360200190f35b610117610937565b61036161093c565b604051808b600981111561037157fe5b81526020018a600981111561038257fe5b815260200189600981111561039357fe5b81526020018860098111156103a457fe5b81526020018760098111156103b557fe5b81526020018660098111156103c657fe5b81526020018560098111156103d757fe5b81526020018460098111156103e857fe5b81526020018360098111156103f957fe5b815260200182600981111561040a57fe5b81526020019a505050505050505050505060405180910390f35b61033561095c565b61011761096b565b6101eb6004803603602081101561044a57600080fd5b50356001600160a01b0316610970565b6101eb6004803603602081101561047057600080fd5b50356001600160a01b0316610a3a565b610117610b47565b600290565b610495610928565b6001600160a01b0316336001600160a01b0316146104f0576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6001600160a01b03821661054b576040805162461bcd60e51b815260206004820152601b60248201527f636f6d70616e7920616464726573732063616e6e6f7420626520300000000000604482015290519081900360640190fd5b60005b83518160ff1610156105ba576001600160a01b03831660009081526001602052604081208551849290879060ff861690811061058657fe5b60209081029190910181015160ff168252810191909152604001600020805460ff191691151591909117905560010161054e565b50505050565b600490565b600390565b60008060008060008060008060008060006105e48c610b4c565b90506105f16000826107cb565b6105fc6001836107cb565b6106076002846107cb565b6106126003856107cb565b61061d6004866107cb565b6106286005876107cb565b6106336006886107cb565b61063e6007896107cb565b61064960088a6107cb565b61065460098b6107cb565b9a509a509a509a509a509a509a509a509a509a50509193959799509193959799565b600590565b600254600160a01b900460ff16156106da576040805162461bcd60e51b815260206004820152601b60248201527f636f6e7261637420616c726561647920696e697469616c697a65640000000000604482015290519081900360640190fd5b6001600160a01b038216610735576040805162461bcd60e51b815260206004820152601c60248201527f4d756c746973696720616464726573732063616e6e6f74206265203000000000604482015290519081900360640190fd5b6001600160a01b038116610790576040805162461bcd60e51b815260206004820152601d60248201527f436f6d70616e69657320616464726573732063616e6e6f742062652030000000604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0383161790556107b482610bcf565b50506002805460ff60a01b1916600160a01b179055565b6000806107d783610b4c565b6001600160a01b03811660009081526001602052604081209192508560098111156107fe57fe5b60ff908116825260208201929092526040016000205416949350505050565b610825610928565b6001600160a01b0316336001600160a01b031614610880576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6001600160a01b0382166108db576040805162461bcd60e51b815260206004820152601b60248201527f636f6d70616e7920616464726573732063616e6e6f7420626520300000000000604482015290519081900360640190fd5b6001600160a01b0382166000908152600160205260408120829185600981111561090157fe5b60ff1681526020810191909152604001600020805460ff1916911515919091179055505050565b6000546001600160a01b031690565b600090565b600060016002600360046005600660076008600990919293949596979899565b6002546001600160a01b031690565b600190565b610978610928565b6001600160a01b0316336001600160a01b0316146109d3576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6001600160a01b038116610a185760405162461bcd60e51b8152600401808060200182810382526021815260200180610bf26021913960400191505060405180910390fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b610a42610928565b6001600160a01b0316336001600160a01b031614610a9d576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6001600160a01b038116610af0576040805162461bcd60e51b815260206004820152601560248201527406e6577206f776e65722063616e6e6f74206265203605c1b604482015290519081900360640190fd5b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0610b19610928565b604080516001600160a01b03928316815291841660208301528051918290030190a1610b4481610bcf565b50565b600990565b60025460408051631401835d60e11b81526001600160a01b0384811660048301529151600093929092169163280306ba91602480820192602092909190829003018186803b158015610b9d57600080fd5b505afa158015610bb1573d6000803e3d6000fd5b505050506040513d6020811015610bc757600080fd5b505192915050565b600080546001600160a01b0319166001600160a01b039290921691909117905556fe636f6d70616e69657356315f3020616464726573732063616e6e6f742062652030a264697066735822122088e871d99e2b846ccc86bb05b41efb10287f7b85686892d2201867895ee8d26d64736f6c63430007000033";
