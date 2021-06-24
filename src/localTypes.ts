import { ethers, Signer } from "ethers";

export type ProviderOrSigner = Signer | ethers.providers.JsonRpcSigner | ethers.providers.ExternalProvider