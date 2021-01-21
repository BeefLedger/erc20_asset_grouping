import { Signer } from "ethers"

import * as Erc20Compiled  from "../ethereum/abi/IERC20.json"
import * as Erc20FactoryCompiled  from "../ethereum/abi/ERC20Factory.json"
import { getContract } from "./contractFactory"
import { Ierc20 } from "../types/Ierc20"
import { Erc20Factory } from "../types/Erc20Factory"

export async function getERC20FactoryContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<Erc20Factory> {
    return getContract<Erc20Factory>(address, Erc20FactoryCompiled.abi, signerIdxOrAddressOrSigner)
}

export async function getErc20Contract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<Ierc20> {
    return getContract(address, Erc20Compiled.abi, signerIdxOrAddressOrSigner)
}