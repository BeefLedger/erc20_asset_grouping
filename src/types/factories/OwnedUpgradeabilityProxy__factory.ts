/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { OwnedUpgradeabilityProxy } from "../OwnedUpgradeabilityProxy";

export class OwnedUpgradeabilityProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<OwnedUpgradeabilityProxy> {
    return super.deploy(overrides || {}) as Promise<OwnedUpgradeabilityProxy>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OwnedUpgradeabilityProxy {
    return super.attach(address) as OwnedUpgradeabilityProxy;
  }
  connect(signer: Signer): OwnedUpgradeabilityProxy__factory {
    return super.connect(signer) as OwnedUpgradeabilityProxy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnedUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OwnedUpgradeabilityProxy;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "ProxyOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [],
    name: "proxyOwner",
    outputs: [
      {
        internalType: "address",
        name: "owner",
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
    name: "transferProxyOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b610043565b7f7b7908d4239387d27560109f4e4d50ba8ebdf987651d565b5213ca4425d8948655565b6106bc806100526000396000f3fe60806040526004361061004e5760003560e01c8063025313a2146100655780633659cfe6146100965780634f1ef286146100c95780635c60da1b1461017f578063f1739cae146101945761005d565b3661005d5761005b6101c7565b005b61005b6101c7565b34801561007157600080fd5b5061007a610253565b604080516001600160a01b039092168252519081900360200190f35b3480156100a257600080fd5b5061005b600480360360208110156100b957600080fd5b50356001600160a01b0316610278565b61005b600480360360408110156100df57600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561010a57600080fd5b82018360208201111561011c57600080fd5b8035906020019184600183028401116401000000008311171561013e57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506102ed945050505050565b34801561018b57600080fd5b5061007a610446565b3480156101a057600080fd5b5061005b600480360360208110156101b757600080fd5b50356001600160a01b031661046b565b60006101d1610446565b90506001600160a01b03811661022e576040805162461bcd60e51b815260206004820152601a60248201527f696d706c656d656e746174696f6e2063616e6e6f742062652030000000000000604482015290519081900360640190fd5b60405136600082376000803683855af43d806000843e81801561024f578184f35b8184fd5b7f7b7908d4239387d27560109f4e4d50ba8ebdf987651d565b5213ca4425d894865490565b610280610253565b6001600160a01b0316336001600160a01b0316146102e1576040805162461bcd60e51b815260206004820152601960248201527839b2b73232b91034b9903737ba10383937bc3c9037bbb732b960391b604482015290519081900360640190fd5b6102ea8161057b565b50565b6102f5610253565b6001600160a01b0316336001600160a01b031614610356576040805162461bcd60e51b815260206004820152601960248201527839b2b73232b91034b9903737ba10383937bc3c9037bbb732b960391b604482015290519081900360640190fd5b61035f82610278565b6000306001600160a01b031634836040518082805190602001908083835b6020831061039c5780518252601f19909201916020918201910161037d565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146103fe576040519150601f19603f3d011682016040523d82523d6000602084013e610403565b606091505b5050905080610441576040805162461bcd60e51b815260206004820152600560248201526432b93937b960d91b604482015290519081900360640190fd5b505050565b7f8237f1a37609e816d8836dccef0c0be98ff6956ffa4035934e1d39231985e7d85490565b610473610253565b6001600160a01b0316336001600160a01b0316146104d4576040805162461bcd60e51b815260206004820152601960248201527839b2b73232b91034b9903737ba10383937bc3c9037bbb732b960391b604482015290519081900360640190fd5b6001600160a01b038116610527576040805162461bcd60e51b815260206004820152601560248201527406e6577206f776e65722063616e6e6f74206265203605c1b604482015290519081900360640190fd5b7f5a3e66efaa1e445ebd894728a69d6959842ea1e97bd79b892797106e270efcd9610550610253565b604080516001600160a01b03928316815291841660208301528051918290030190a16102ea81610619565b6000610585610446565b9050816001600160a01b0316816001600160a01b031614156105d85760405162461bcd60e51b81526004018080602001828103825260258152602001806106626025913960400191505060405180910390fd5b6105e18261063d565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a25050565b7f7b7908d4239387d27560109f4e4d50ba8ebdf987651d565b5213ca4425d8948655565b7f8237f1a37609e816d8836dccef0c0be98ff6956ffa4035934e1d39231985e7d85556fe6e657720696d706c656d656e746174696f6e2063616e6e6f74206265207468652073616d65a26469706673582212203e36769806f6b40bdf74314ade0fc539d7ada365030f36b166dc154a89d7adf564736f6c63430007000033";
