import * as artifactErc20Factory from "../abi/ERC20Factory.json"


import { Signer } from "ethers"
import { deployContract } from "../../chain/contractFactory"
import { Erc20Factory } from "../../types/Erc20Factory"



export async function deployERC20Factory(signer: Signer): Promise<Erc20Factory>  {
    const contract = await deployContract<Erc20Factory>(signer, artifactErc20Factory)  
    return contract
}