import { ContractTransaction, ethers, Signer } from "ethers";

import { getERC20FactoryContract } from "./chain/prefabContractFactory";
import { ERC20FactoryV10 } from "./types/ERC20FactoryV10";
import { initializeERC20Factory } from './ethereum/deploy/deploy'
import * as artifact from "./ethereum/abi/ERC20FactoryV1_0.json"
import { decode, encode } from "./ethereum/encodeCall";
import { DecodedCall } from "./abiDecoderController";
import { ProviderOrSigner } from "./localTypes";


export class ERC20FactoryController {

    private _erc20FactoryAddress: string;
    private _signer: Signer;
    private _erc20FactoryContract? : ERC20FactoryV10

    constructor(erc20FactoryAddress: string, signerOrProvider: ProviderOrSigner) {
        this._erc20FactoryAddress = erc20FactoryAddress;

        if(signerOrProvider instanceof Signer || signerOrProvider instanceof ethers.providers.JsonRpcSigner) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    public static async deployERC20FactoryContract(signer: Signer): Promise<[ERC20FactoryV10, string]> {
        return initializeERC20Factory(signer)
    }

    private async _getERC20FactoryContract(): Promise<ERC20FactoryV10> {
        if(this._erc20FactoryContract) {
            return this._erc20FactoryContract
        }

        try {
            // Connect to the contract with my signer
            const contract = await getERC20FactoryContract(this._erc20FactoryAddress, this._signer)
            this._erc20FactoryContract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get ERC20Factory contract: ${e}`)
        }
    }



    /** Getters */
    public async getContract(): Promise<ERC20FactoryV10> {
        const erc20FactoryContract = await this._getERC20FactoryContract();
        return erc20FactoryContract
    }

    public async getOwner(): Promise<string> {
        const erc20FactoryContract = await this._getERC20FactoryContract();
        return erc20FactoryContract.owner();
    }

    public async getTokens(): Promise<Array<string>> {
        const erc20FactoryContract = await this._getERC20FactoryContract();
        return erc20FactoryContract.getTokens();
    }

    public async deployERC20Contract(chainId: number, name: string, symbol: string): Promise<ContractTransaction> {
        const erc20FactoryContract = await this._getERC20FactoryContract();
        return erc20FactoryContract.functions.deploy(chainId, name, symbol)
    }

    /** Helpers */
    public static encodeCall(functionName: string, args?: any[]): string {
        return encode(artifact, functionName, args)
    }

    public static decodeCall(data: string): DecodedCall | null {
        return decode(artifact, data)
    }
}