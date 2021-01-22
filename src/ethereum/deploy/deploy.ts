import * as artifactErc20Factory from "../abi/ERC20Factory.json"


import { Signer } from "ethers"
import { deployContract } from "../../chain/contractFactory"
import { ERC20Factory } from "../../types/ERC20Factory"



export async function deployERC20Factory(signer: Signer): Promise<ERC20Factory>  {
    const contract = await deployContract<ERC20Factory>(signer, artifactErc20Factory)  
    return contract
}