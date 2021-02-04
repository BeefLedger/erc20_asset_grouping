/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721BeefLedgerV10 } from "../ERC721BeefLedgerV10";

export class ERC721BeefLedgerV10__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC721BeefLedgerV10> {
    return super.deploy(overrides || {}) as Promise<ERC721BeefLedgerV10>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721BeefLedgerV10 {
    return super.attach(address) as ERC721BeefLedgerV10;
  }
  connect(signer: Signer): ERC721BeefLedgerV10__factory {
    return super.connect(signer) as ERC721BeefLedgerV10__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721BeefLedgerV10 {
    return new Contract(address, _abi, signerOrProvider) as ERC721BeefLedgerV10;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
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
        internalType: "address payable",
        name: "_owner",
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
        internalType: "address payable",
        name: "multisig",
        type: "address",
      },
    ],
    name: "setMultisigWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "mint",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalTokens",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getOwner",
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
  "0x608060405234801561001057600080fd5b5061001a3361001f565b610041565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6113b5806100506000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063de836ebd11610066578063de836ebd146102bc578063e985e9c51461036f578063f08b82e61461039d578063f2fde38b146103a5576100f5565b80638da5cb5b14610243578063a22cb4651461024b578063c41a360a14610279578063c4d66de814610296576100f5565b806342966c68116100d357806342966c68146101975780634f558e79146101b457806364913477146101e557806370a082311461020b576100f5565b8063081812fc146100fa578063095ea7b31461013357806323b872dd14610161575b600080fd5b6101176004803603602081101561011057600080fd5b50356103cb565b604080516001600160a01b039092168252519081900360200190f35b61015f6004803603604081101561014957600080fd5b506001600160a01b03813516906020013561042d565b005b61015f6004803603606081101561017757600080fd5b506001600160a01b0381358116916020810135909116906040013561053e565b61015f600480360360208110156101ad57600080fd5b5035610593565b6101d1600480360360208110156101ca57600080fd5b50356105e4565b604080519115158252519081900360200190f35b61015f600480360360208110156101fb57600080fd5b50356001600160a01b0316610601565b6102316004803603602081101561022157600080fd5b50356001600160a01b03166106e3565b60408051918252519081900360200190f35b610117610751565b61015f6004803603604081101561026157600080fd5b506001600160a01b0381351690602001351515610760565b6101176004803603602081101561028f57600080fd5b503561082c565b61015f600480360360208110156102ac57600080fd5b50356001600160a01b0316610847565b6101d1600480360360408110156102d257600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156102fd57600080fd5b82018360208201111561030f57600080fd5b8035906020019184602083028401116401000000008311171561033157600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061092e945050505050565b6101d16004803603604081101561038557600080fd5b506001600160a01b0381358116916020013516610ad3565b610231610b01565b61015f600480360360208110156103bb57600080fd5b50356001600160a01b0316610b12565b60006103d6826105e4565b6104115760405162461bcd60e51b815260040180806020018281038252602c815260200180611284602c913960400191505060405180910390fd5b506000908152600260205260409020546001600160a01b031690565b600061043882610c1c565b9050806001600160a01b0316836001600160a01b0316141561048b5760405162461bcd60e51b81526004018080602001828103825260218152602001806112d96021913960400191505060405180910390fd5b336001600160a01b03821614806104a757506104a78133610ad3565b6104e25760405162461bcd60e51b81526004018080602001828103825260388152602001806111d76038913960400191505060405180910390fd5b60008281526002602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6105483382610c70565b6105835760405162461bcd60e51b81526004018080602001828103825260318152602001806112fa6031913960400191505060405180910390fd5b61058e838383610d14565b505050565b61059d3382610c70565b6105d85760405162461bcd60e51b81526004018080602001828103825260308152602001806113506030913960400191505060405180910390fd5b6105e181610e58565b50565b6000908152600160205260409020546001600160a01b0316151590565b610609610751565b6001600160a01b0316336001600160a01b031614610664576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6001600160a01b0381166106bf576040805162461bcd60e51b815260206004820152601c60248201527f4d756c746973696720416464726573732063616e6e6f74206265203000000000604482015290519081900360640190fd5b600680546001600160a01b0319166001600160a01b0383161790556105e181610e6a565b60006001600160a01b03821661072a5760405162461bcd60e51b815260040180806020018281038252602a81526020018061120f602a913960400191505060405180910390fd5b6001600160a01b038216600090815260036020526040902061074b90610e8c565b92915050565b6000546001600160a01b031690565b6001600160a01b0382163314156107be576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6000908152600160205260409020546001600160a01b031690565b600654600160a01b900460ff16156108a6576040805162461bcd60e51b815260206004820152601c60248201527f436f6e747261637420616c726561647920696e697469616c697a656400000000604482015290519081900360640190fd5b6001600160a01b0381166108f5576040805162461bcd60e51b815260206004820152601160248201527004f776e65722063616e6e6f74206265203607c1b604482015290519081900360640190fd5b6108fe81610e6a565b6006805460ff60a01b196001600160a01b039093166001600160a01b03199091161791909116600160a01b179055565b600654604080516317aa5fb760e11b815233600482015290516000926001600160a01b031691632f54bf6e916024808301926020929190829003018186803b15801561097957600080fd5b505afa15801561098d573d6000803e3d6000fd5b505050506040513d60208110156109a357600080fd5b50516109e05760405162461bcd60e51b81526004018080602001828103825260228152602001806112626022913960400191505060405180910390fd5b606482511115610a37576040805162461bcd60e51b815260206004820181905260248201527f6d6178696d756d206f6620746f6b656e7320746f206d696e7420697320313030604482015290519081900360640190fd5b6001600160a01b038316610a92576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b60005b82518160ff161015610ac957610ac184848360ff1681518110610ab457fe5b6020026020010151610e90565b600101610a95565b5060019392505050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000610b0d6005610e8c565b905090565b610b1a610751565b6001600160a01b0316336001600160a01b031614610b75576040805162461bcd60e51b815260206004820152601360248201527239b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b6001600160a01b038116610bc8576040805162461bcd60e51b815260206004820152601560248201527406e6577206f776e65722063616e6e6f74206265203605c1b604482015290519081900360640190fd5b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0610bf1610751565b604080516001600160a01b03928316815291841660208301528051918290030190a16105e181610e6a565b6000818152600160205260408120546001600160a01b03168061074b5760405162461bcd60e51b81526004018080602001828103825260298152602001806112396029913960400191505060405180910390fd5b6000610c7b826105e4565b610cb65760405162461bcd60e51b815260040180806020018281038252602c8152602001806111ab602c913960400191505060405180910390fd5b6000610cc183610c1c565b9050806001600160a01b0316846001600160a01b03161480610cfc5750836001600160a01b0316610cf1846103cb565b6001600160a01b0316145b80610d0c5750610d0c8185610ad3565b949350505050565b826001600160a01b0316610d2782610c1c565b6001600160a01b031614610d6c5760405162461bcd60e51b81526004018080602001828103825260298152602001806112b06029913960400191505060405180910390fd5b6001600160a01b038216610db15760405162461bcd60e51b81526004018080602001828103825260248152602001806111876024913960400191505060405180910390fd5b610dba81610f70565b6001600160a01b0383166000908152600360205260409020610ddb90610fab565b6001600160a01b0382166000908152600360205260409020610dfc90610fbc565b60008181526001602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6105e1610e6482610c1c565b82610fc5565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b5490565b610e99816105e4565b15610eeb576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b600081815260016020908152604080832080546001600160a01b0319166001600160a01b038716908117909155835260039091529020610f2a90610fbc565b610f346005610fbc565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000818152600260205260409020546001600160a01b0316156105e157600090815260026020526040902080546001600160a01b0319169055565b8054610fb89060016110a6565b9055565b80546001019055565b816001600160a01b0316610fd882610c1c565b6001600160a01b03161461101d5760405162461bcd60e51b815260040180806020018281038252602581526020018061132b6025913960400191505060405180910390fd5b61102681610f70565b6001600160a01b038216600090815260036020526040902061104790610fab565b6110516005610fab565b60008181526001602052604080822080546001600160a01b0319169055518291906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60006110e883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506110ef565b9392505050565b6000818484111561117e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561114357818101518382015260200161112b565b50505050905090810190601f1680156111705780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe4552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e5369676e657220646f6573206e6f742062656c6f6e6720746f204d756c74697369674552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644552433732313a206275726e206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220449b0f5e7562fd79c5a303d3a5822a8c6706ac5beac1d6bf4d706e2378ae7b9e64736f6c63430007000033";
