import { Signer } from "ethers"

import * as ERC20ForAssetGroupingCompiled  from "../ethereum/abi/ERC20ForAssetGrouping.json"
import * as Erc20FactoryCompiled  from "../ethereum/abi/ERC20FactoryV1_0.json"
import { getContract } from "./contractFactory"
import { ERC20ForAssetGrouping } from "../types/ERC20ForAssetGrouping"
import { ERC20FactoryV10 } from "../types/ERC20FactoryV10"

export async function getERC20FactoryContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<ERC20FactoryV10> {
    return getContract<ERC20FactoryV10>(address, Erc20FactoryCompiled.abi, signerIdxOrAddressOrSigner)
}

export async function getErc20Contract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<ERC20ForAssetGrouping> {
    return getContract<ERC20ForAssetGrouping>(address, ERC20ForAssetGroupingCompiled.abi, signerIdxOrAddressOrSigner)
}