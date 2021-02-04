import * as artifactErc20Factory from "../abi/ERC20FactoryV1_0.json"


import { Signer } from "ethers"
import { initializeContract, upgradeContract } from "../../chain/contractFactory"
import { ERC20FactoryV10 } from "../../types/ERC20FactoryV10"


export async function initializeERC20Factory(signer: Signer): Promise<ERC20FactoryV10>  {
    const contract = await initializeContract<ERC20FactoryV10>(signer, artifactErc20Factory) 
    return contract
}

export async function upgradeERC20Factory(signer: Signer, proxyAddress: string): Promise<ERC20FactoryV10>  {
    const contract = await upgradeContract<ERC20FactoryV10>(signer, artifactErc20Factory, proxyAddress) 
    return contract
}