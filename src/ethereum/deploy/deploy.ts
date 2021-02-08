import { Signer } from "ethers"

import { initializeContract, upgradeContract } from "../../chain/contractFactory"

import * as artifactErc20FactoryV10 from "../abi/ERC20FactoryV1_0.json"
import * as artifactErc20FactoryV11 from "../abi/ERC20FactoryV1_1.json"

import { ERC20FactoryV10 } from "../../types/ERC20FactoryV10"
import { ERC20FactoryV11 } from "../../types"


export async function initializeERC20Factory(signer: Signer): Promise<[ERC20FactoryV10, string]>  {
    const owner = await signer.getAddress();
    const [contract, proxyAddress] = await initializeContract<ERC20FactoryV10>(signer, artifactErc20FactoryV10, "initialize", [owner]) 
    return [contract, proxyAddress]
}

export async function upgradeERC20Factory(signer: Signer, proxyAddress: string): Promise<ERC20FactoryV11>  {
    const contract = await upgradeContract<ERC20FactoryV11>(signer, artifactErc20FactoryV11, proxyAddress, "initializeV11", [745]) 
    return contract
}