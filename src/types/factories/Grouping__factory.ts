/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Grouping } from "../Grouping";

export class Grouping__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rgToken: string,
    _erc721: string,
    overrides?: Overrides
  ): Promise<Grouping> {
    return super.deploy(
      _rgToken,
      _erc721,
      overrides || {}
    ) as Promise<Grouping>;
  }
  getDeployTransaction(
    _rgToken: string,
    _erc721: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_rgToken, _erc721, overrides || {});
  }
  attach(address: string): Grouping {
    return super.attach(address) as Grouping;
  }
  connect(signer: Signer): Grouping__factory {
    return super.connect(signer) as Grouping__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Grouping {
    return new Contract(address, _abi, signerOrProvider) as Grouping;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_rgToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_erc721",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "rgToken",
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
        name: "_asset",
        type: "uint256",
      },
    ],
    name: "addAsset",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_asset",
        type: "uint256",
      },
    ],
    name: "isAssetAdded",
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
    name: "getAssets",
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
    inputs: [],
    name: "getRGToken",
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
    name: "getERC721Address",
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
  "0x608060405234801561001057600080fd5b5060405161044d38038061044d8339818101604052604081101561003357600080fd5b5080516020909101516001600160a01b038216610097576040805162461bcd60e51b815260206004820152601c60248201527f524720546f6b656e20616464726573732063616e6e6f74206265203000000000604482015290519081900360640190fd5b6001600160a01b0381166100f2576040805162461bcd60e51b815260206004820152601a60248201527f45524337323120616464726573732063616e6e6f742062652030000000000000604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b031991821617909155600480549290931691161790556103208061012d6000396000f3fe608060405234801561001057600080fd5b50600436106100615760003560e01c80627ffb78146100665780630b71d2561461008a57806367e4ac2c146100bb57806392206ff514610113578063f110a60e1461011b578063fa3fa5f014610123575b600080fd5b61006e610140565b604080516001600160a01b039092168252519081900360200190f35b6100a7600480360360208110156100a057600080fd5b503561014f565b604080519115158252519081900360200190f35b6100c361025f565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156100ff5781810151838201526020016100e7565b505050509050019250505060405180910390f35b61006e6102b7565b61006e6102c6565b6100a76004803603602081101561013957600080fd5b50356102d5565b6004546001600160a01b031690565b6004546000906001600160a01b031633146101b1576040805162461bcd60e51b815260206004820152601860248201527f6f70657261746f72206973206e6f7420617070726f7665640000000000000000604482015290519081900360640190fd5b60008281526002602052604090205460ff161561020b576040805162461bcd60e51b8152602060048201526013602482015272105cdcd95d08185b1c9958591e481859191959606a1b604482015290519081900360640190fd5b506000818152600260205260408120805460ff1916600190811790915580548082018255918190527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6909101829055919050565b606060018054806020026020016040519081016040528092919081815260200182805480156102ad57602002820191906000526020600020905b815481526020019060010190808311610299575b5050505050905090565b6000546001600160a01b031690565b6000546001600160a01b031681565b60009081526002602052604090205460ff169056fea264697066735822122062c4acc1571792f566806be20e8ce589ebe14fa473c970d50c7c7ba9377d0c0f64736f6c63430007000033";
