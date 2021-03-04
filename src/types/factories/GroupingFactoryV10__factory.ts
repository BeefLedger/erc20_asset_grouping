/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { GroupingFactoryV10 } from "../GroupingFactoryV10";

export class GroupingFactoryV10__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<GroupingFactoryV10> {
    return super.deploy(overrides || {}) as Promise<GroupingFactoryV10>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GroupingFactoryV10 {
    return super.attach(address) as GroupingFactoryV10;
  }
  connect(signer: Signer): GroupingFactoryV10__factory {
    return super.connect(signer) as GroupingFactoryV10__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GroupingFactoryV10 {
    return new Contract(address, _abi, signerOrProvider) as GroupingFactoryV10;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "grouping",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_rgToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_erc721",
        type: "address",
      },
    ],
    name: "DeployGrouping",
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
        name: "_rgToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_erc721",
        type: "address",
      },
    ],
    name: "deployGrouping",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getGroupings",
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
  {
    inputs: [],
    name: "getGroupedTokens",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_grouping",
        type: "address",
      },
    ],
    name: "getToken",
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
        name: "_rgToken",
        type: "address",
      },
    ],
    name: "getGrouping",
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
  "0x608060405234801561001057600080fd5b5061001a3361001f565b610041565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b610bb4806100506000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b1461015f578063b48ad28414610167578063c4d66de81461018d578063f2fde38b146101b357610088565b8063462156311461008d57806359770438146100bd5780637bb4a200146100ff5780638b41e6cb14610157575b600080fd5b6100bb600480360360408110156100a357600080fd5b506001600160a01b03813581169160200135166101d9565b005b6100e3600480360360208110156100d357600080fd5b50356001600160a01b031661047e565b604080516001600160a01b039092168252519081900360200190f35b61010761049c565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561014357818101518382015260200161012b565b505050509050019250505060405180910390f35b6101076104fe565b6100e361055e565b6100e36004803603602081101561017d57600080fd5b50356001600160a01b031661056d565b6100bb600480360360208110156101a357600080fd5b50356001600160a01b031661058b565b6100bb600480360360208110156101c957600080fd5b50356001600160a01b03166105fc565b6101e161055e565b6001600160a01b0316336001600160a01b03161461023c576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6001600160a01b038216610297576040805162461bcd60e51b815260206004820152601c60248201527f524720546f6b656e20616464726573732063616e6e6f74206265203000000000604482015290519081900360640190fd5b6001600160a01b0381166102f2576040805162461bcd60e51b815260206004820152601a60248201527f45524337323120616464726573732063616e6e6f742062652030000000000000604482015290519081900360640190fd5b6001600160a01b038281166000908152600360205260409020541615610357576040805162461bcd60e51b81526020600482015260156024820152741491c8151bdad95b88185b1c9958591e481d5cd959605a1b604482015290519081900360640190fd5b6000828260405161036790610724565b6001600160a01b03928316815291166020820152604080519182900301906000f08015801561039a573d6000803e3d6000fd5b506001805480820182557fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b038085166001600160a01b031992831681179093556002805494850190557f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace90930180548885169083168117909155600081815260036020908152604080832080548616871790558583526004909152808220805490941683179093559151949550928616937feaf8ebc3e12447995550bcd604928c42c64aae41119317732d8b5677cda1a75f9190a4505050565b6001600160a01b039081166000908152600460205260409020541690565b606060028054806020026020016040519081016040528092919081815260200182805480156104f457602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116104d6575b5050505050905090565b606060018054806020026020016040519081016040528092919081815260200182805480156104f4576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116104d6575050505050905090565b6000546001600160a01b031690565b6001600160a01b039081166000908152600360205260409020541690565b60055460ff16156105e3576040805162461bcd60e51b815260206004820152601b60248201527f636f6e7261637420616c726561647920696e697469616c697a65640000000000604482015290519081900360640190fd5b6005805460ff191660011790556105f981610702565b50565b61060461055e565b6001600160a01b0316336001600160a01b03161461065f576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6001600160a01b0381166106b2576040805162461bcd60e51b815260206004820152601560248201527406e6577206f776e65722063616e6e6f74206265203605c1b604482015290519081900360640190fd5b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e06106db61055e565b604080516001600160a01b03928316815291841660208301528051918290030190a16105f9815b600080546001600160a01b0319166001600160a01b0392909216919091179055565b61044d806107328339019056fe608060405234801561001057600080fd5b5060405161044d38038061044d8339818101604052604081101561003357600080fd5b5080516020909101516001600160a01b038216610097576040805162461bcd60e51b815260206004820152601c60248201527f524720546f6b656e20616464726573732063616e6e6f74206265203000000000604482015290519081900360640190fd5b6001600160a01b0381166100f2576040805162461bcd60e51b815260206004820152601a60248201527f45524337323120616464726573732063616e6e6f742062652030000000000000604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b031991821617909155600480549290931691161790556103208061012d6000396000f3fe608060405234801561001057600080fd5b50600436106100615760003560e01c80627ffb78146100665780630b71d2561461008a57806367e4ac2c146100bb57806392206ff514610113578063f110a60e1461011b578063fa3fa5f014610123575b600080fd5b61006e610140565b604080516001600160a01b039092168252519081900360200190f35b6100a7600480360360208110156100a057600080fd5b503561014f565b604080519115158252519081900360200190f35b6100c361025f565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156100ff5781810151838201526020016100e7565b505050509050019250505060405180910390f35b61006e6102b7565b61006e6102c6565b6100a76004803603602081101561013957600080fd5b50356102d5565b6004546001600160a01b031690565b6004546000906001600160a01b031633146101b1576040805162461bcd60e51b815260206004820152601860248201527f6f70657261746f72206973206e6f7420617070726f7665640000000000000000604482015290519081900360640190fd5b60008281526002602052604090205460ff161561020b576040805162461bcd60e51b8152602060048201526013602482015272105cdcd95d08185b1c9958591e481859191959606a1b604482015290519081900360640190fd5b506000818152600260205260408120805460ff1916600190811790915580548082018255918190527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6909101829055919050565b606060018054806020026020016040519081016040528092919081815260200182805480156102ad57602002820191906000526020600020905b815481526020019060010190808311610299575b5050505050905090565b6000546001600160a01b031690565b6000546001600160a01b031681565b60009081526002602052604090205460ff169056fea264697066735822122062c4acc1571792f566806be20e8ce589ebe14fa473c970d50c7c7ba9377d0c0f64736f6c63430007000033a26469706673582212204d38c038e78bc2f2c1db4d6c55871b2b8a7f279d708275d6e07acec8b145464e64736f6c63430007000033";
