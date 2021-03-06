import { Signer } from "ethers"

import * as ERC20ForAssetGroupingCompiled  from "../ethereum/abi/ERC20ForAssetGrouping.json"
import * as Erc20FactoryCompiled  from "../ethereum/abi/ERC20FactoryV1_0.json"
import * as Erc721Compiled  from "../ethereum/abi/ERC721BeefLedgerV1_1.json"
import * as MultisigCompiled  from "../ethereum/abi/MultisigWalletV1_0.json"
import * as GroupingCompiled  from "../ethereum/abi/Grouping.json"
import * as GroupingFactoryCompiled  from "../ethereum/abi/GroupingFactoryV1_0.json"
import * as ActionsStorageCompiled  from "../ethereum/abi/ActionsStorageV1_1.json"
import * as CompaniesCompiled  from "../ethereum/abi/CompaniesV1_0.json"
import * as ResourceActionsCompiled  from "../ethereum/abi/ResourceActionsV1_0.json"
import * as DealRoomHubCompiled  from "../ethereum/abi/DealRoomHubV1_0.json"
import * as DealRoomCompiled  from "../ethereum/abi/DealRoom.json"
import * as MultisigHashedCompiled  from "../ethereum/abi/MultiSigHashed.json"

import { getContract } from "./contractFactory"
import { 
    MultisigWalletV10, 
    ERC20ForAssetGrouping, 
    ERC20FactoryV10, Grouping, 
    ERC721BeefLedgerV11, 
    ActionsStorageV11,
    CompaniesV10,
    ResourceActionsV10,
    DealRoomHubV10,
    DealRoom,
    MultiSigHashed,
    GroupingFactoryV10
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

export async function getGroupingFactoryContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<GroupingFactoryV10> {
    return getContract<GroupingFactoryV10>(address, GroupingFactoryCompiled.abi, signerIdxOrAddressOrSigner)
}

export async function getActionsStorageContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<ActionsStorageV11> {
    return getContract<ActionsStorageV11>(address, ActionsStorageCompiled.abi, signerIdxOrAddressOrSigner)
}

export async function getCompaniesContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<CompaniesV10> {
    return getContract<CompaniesV10>(address, CompaniesCompiled.abi, signerIdxOrAddressOrSigner)
}

export async function getResourceActionsContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<ResourceActionsV10> {
    return getContract<ResourceActionsV10>(address, ResourceActionsCompiled.abi, signerIdxOrAddressOrSigner)
}

export async function getDealRoomHubContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<DealRoomHubV10> {
    return getContract<DealRoomHubV10>(address, DealRoomHubCompiled.abi, signerIdxOrAddressOrSigner)
}

export async function getDealRoomContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<DealRoom> {
    return getContract<DealRoom>(address, DealRoomCompiled.abi, signerIdxOrAddressOrSigner)
}

export async function getMultisigHashedContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<MultiSigHashed> {
    return getContract<MultiSigHashed>(address, MultisigHashedCompiled.abi, signerIdxOrAddressOrSigner)
}
