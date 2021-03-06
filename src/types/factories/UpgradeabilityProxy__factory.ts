/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UpgradeabilityProxy } from "../UpgradeabilityProxy";

export class UpgradeabilityProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<UpgradeabilityProxy> {
    return super.deploy(overrides || {}) as Promise<UpgradeabilityProxy>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UpgradeabilityProxy {
    return super.attach(address) as UpgradeabilityProxy;
  }
  connect(signer: Signer): UpgradeabilityProxy__factory {
    return super.connect(signer) as UpgradeabilityProxy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeabilityProxy {
    return new Contract(address, _abi, signerOrProvider) as UpgradeabilityProxy;
  }
}

const _abi = [
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
    stateMutability: "payable",
    type: "receive",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610151806100206000396000f3fe6080604052600436106100225760003560e01c80635c60da1b1461003957610031565b366100315761002f61006a565b005b61002f61006a565b34801561004557600080fd5b5061004e6100f6565b604080516001600160a01b039092168252519081900360200190f35b60006100746100f6565b90506001600160a01b0381166100d1576040805162461bcd60e51b815260206004820152601a60248201527f696d706c656d656e746174696f6e2063616e6e6f742062652030000000000000604482015290519081900360640190fd5b60405136600082376000803683855af43d806000843e8180156100f2578184f35b8184fd5b7f8237f1a37609e816d8836dccef0c0be98ff6956ffa4035934e1d39231985e7d8549056fea2646970667358221220d375f87813a11e1ab708e26671966c3690149e69b965317a17de09d07c98738264736f6c63430007000033";
