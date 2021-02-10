import { Signer } from "ethers"

import * as ERC20ForAssetGroupingCompiled  from "../ethereum/abi/ERC20ForAssetGrouping.json"
import * as Erc20FactoryCompiled  from "../ethereum/abi/ERC20FactoryV1_0.json"
import * as Erc721Compiled  from "../ethereum/abi/ERC721BeefLedgerV1_1.json"
import * as MultisigCompiled  from "../ethereum/abi/MultisigWalletV1_0.json"
import * as GroupingCompiled  from "../ethereum/abi/Grouping.json"
import * as ActionsStorageCompiled  from "../ethereum/abi/ActionsStorageV1_1.json"

import { getContract } from "./contractFactory"
import { 
    MultisigWalletV10, 
    ERC20ForAssetGrouping, 
    ERC20FactoryV10, Grouping, 
    ERC721BeefLedgerV11, 
    ActionsStorageV11
} from "../types"

export async function getERC20FactoryContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<ERC20FactoryV10> {
    return getContract<ERC20FactoryV10>(address, Erc20FactoryCompiled.abi, signerIdxOrAddressOrSigner)
}

export async function getErc20Contract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<ERC20ForAssetGrouping> {
    return getContract<ERC20ForAssetGrouping>(address, ERC20ForAssetGroupingCompiled.abi, signerIdxOrAddressOrSigner)
}

export async function getERC721Contract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<ERC721BeefLedgerV11> {
    return getContract<ERC721BeefLedgerV11>(address, Erc721Compiled.abi, signerIdxOrAddressOrSigner)
}

export async function getMultisigContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<MultisigWalletV10> {
    return getContract<MultisigWalletV10>(address, MultisigCompiled.abi, signerIdxOrAddressOrSigner)
}

export async function getGroupingContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<Grouping> {
    return getContract<Grouping>(address, GroupingCompiled.abi, signerIdxOrAddressOrSigner)
}

export async function getActionsStorageContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<ActionsStorageV11> {
    return getContract<ActionsStorageV11>(address, ActionsStorageCompiled.abi, signerIdxOrAddressOrSigner)
}