import { BigNumberish, Signer } from "ethers"

import { deployContract, initializeContract, upgradeContract } from "../../chain/contractFactory"

import * as artifactErc20FactoryV10 from "../abi/ERC20FactoryV1_0.json"
import * as artifactErc20FactoryV11 from "../abi/ERC20FactoryV1_1.json"

import * as artifactErc721V10 from "../abi/ERC721BeefLedgerV1_0.json"
import * as artifactErc721V11 from "../abi/ERC721BeefLedgerV1_1.json"

import * as artifactMultisig from "../abi/MultisigWalletV1_0.json"

import * as artifactGrouping from "../abi/Grouping.json"

import * as artifactCompanies from "../abi/CompaniesV1_0.json"

import * as artifactDealRoomhub from "../abi/DealRoomHubV1_0.json"

import { ERC20FactoryV10 } from "../../types/ERC20FactoryV10"
import { CompaniesV10, DealRoomHubV10, ERC20FactoryV11, ERC721BeefLedgerV10, Grouping, MultisigWalletV10 } from "../../types"
import { ERC721BeefLedgerV11 } from "../../types/ERC721BeefLedgerV11"


/**ERC20Factory */
export async function initializeERC20Factory(signer: Signer): Promise<[ERC20FactoryV10, string]>  {
    const owner = await signer.getAddress();
    const [contract, proxyAddress] = await initializeContract<ERC20FactoryV10>(signer, artifactErc20FactoryV10, "initialize", [owner]) 
    return [contract, proxyAddress]
}

export async function upgradeERC20Factory(signer: Signer, proxyAddress: string): Promise<ERC20FactoryV11>  {
    const contract = await upgradeContract<ERC20FactoryV11>(signer, artifactErc20FactoryV11, proxyAddress, "initializeV11", [745]) 
    return contract
}

/**ERC721 */
export async function initializeERC721(signer: Signer, multisigAddress: string): Promise<[ERC721BeefLedgerV10, string]>  {
    const [contract, proxyAddress] = await initializeContract<ERC721BeefLedgerV10>(signer, artifactErc721V10, "initialize", [multisigAddress]) 
    return [contract, proxyAddress]
}

export async function upgradeERC721(signer: Signer, proxyAddress: string): Promise<ERC721BeefLedgerV11>  {
    const contract = await upgradeContract<ERC721BeefLedgerV11>(signer, artifactErc721V11, proxyAddress, "initializeV11", []) 
    return contract
}

/** Multisig */
export async function initializeMultisig(signer: Signer, owners: Array<string>, requirement: BigNumberish): Promise<[MultisigWalletV10, string]>  {
    const [contract, proxyAddress] = await initializeContract<MultisigWalletV10>(signer, artifactMultisig, "initialize", [owners, requirement]) 
    return [contract, proxyAddress]
}

/** Companies */
export async function initializeCompanies(signer: Signer, owner: string): Promise<[CompaniesV10, string]>  {
    const [contract, proxyAddress] = await initializeContract<CompaniesV10>(signer, artifactCompanies, "initialize", [owner]) 
    return [contract, proxyAddress]
}

/** Grouping */
export async function deployGrouping(signer: Signer, rgTokenAddress: string, erc721Address: string): Promise<Grouping>  {
    const contract = await deployContract<Grouping>(signer, artifactGrouping, rgTokenAddress, erc721Address) 
    return contract
}

/** DealRoom */
export async function initializeDealRoomHub(signer: Signer): Promise<[DealRoomHubV10, string]>  {
    const [contract, proxyAddress] = await initializeContract<DealRoomHubV10>(signer, artifactDealRoomhub, "initialize", []) 
    return [contract, proxyAddress]
}