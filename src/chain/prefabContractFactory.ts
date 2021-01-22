import { Signer } from "ethers"

import * as Erc20Compiled  from "../ethereum/abi/IERC20.json"
import * as Erc20FactoryCompiled  from "../ethereum/abi/ERC20Factory.json"
import { getContract } from "./contractFactory"
import { ERC20ForAssetGrouping } from "../types/ERC20ForAssetGrouping"
import { ERC20Factory } from "../types/ERC20Factory"

export async function getERC20FactoryContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<ERC20Factory> {
    return getContract<ERC20Factory>(address, Erc20FactoryCompiled.abi, signerIdxOrAddressOrSigner)
}

export async function getErc20Contract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<ERC20ForAssetGrouping> {
    return getContract<ERC20ForAssetGrouping>(address, Erc20Compiled.abi, signerIdxOrAddressOrSigner)
}