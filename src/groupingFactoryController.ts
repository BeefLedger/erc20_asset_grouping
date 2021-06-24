import { ethers, Signer, ContractTransaction } from "ethers";

import { getGroupingFactoryContract } from "./chain/prefabContractFactory";
import { initializeGroupingFactory } from "./ethereum/deploy/deploy";
import { GroupingFactoryV10 } from "./types";
import * as artifact from "./ethereum/abi/GroupingFactoryV1_0.json"
import { decode, encode } from "./ethereum/encodeCall";
import { DecodedCall } from "./abiDecoderController";
import { ProviderOrSigner } from "./localTypes";

export class GroupingFactoryController {

    private _signer: Signer;
    private _groupingFactoryAddress : string
    private _groupingFactoryContract? : GroupingFactoryV10

    constructor(groupingFactoryAddress: string, signerOrProvider: ProviderOrSigner) {
        this._groupingFactoryAddress = groupingFactoryAddress;
        
        if(signerOrProvider instanceof Signer || signerOrProvider instanceof ethers.providers.JsonRpcSigner) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    public static async deployGroupingFactoryContract(signer: Signer, owner: string): Promise<[GroupingFactoryV10, string]> {
        return initializeGroupingFactory(signer, owner)
    }

    private async _getGroupingFactoryContract(): Promise<GroupingFactoryV10> {
        if(this._groupingFactoryContract) {
            return this._groupingFactoryContract
        }

        try {
            // Connect to the contract with my signer
            const contract = await getGroupingFactoryContract(this._groupingFactoryAddress, this._signer)
            this._groupingFactoryContract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get GroupingFactoryV10 contract: ${e}`)
        }
    }

    /** Getters */
    public async getContract(): Promise<GroupingFactoryV10> {
        const groupingFactoryContract = await this._getGroupingFactoryContract();
        return groupingFactoryContract
    }

    public async getGroupings(): Promise<Array<string>> {
        const groupingFactoryContract = await this._getGroupingFactoryContract();
        return groupingFactoryContract.getGroupings();
    }

    public async getGroupedTokens(): Promise<Array<string>> {
        const groupingFactoryContract = await this._getGroupingFactoryContract();
        return groupingFactoryContract.getGroupedTokens();
    }

    public async getToken(groupingAddress: string): Promise<string> {
        const groupingFactoryContract = await this._getGroupingFactoryContract();
        return groupingFactoryContract.getToken(groupingAddress);
    }

    public async getGrouping(rgToken: string): Promise<string> {
        const groupingFactoryContract = await this._getGroupingFactoryContract();
        return groupingFactoryContract.getGrouping(rgToken);
    }

    /**Setters */
    public async deployGroupingContract(rgToken: string, erc721: string): Promise<ContractTransaction> {
        const groupingFactoryContract = await this._getGroupingFactoryContract();
        return groupingFactoryContract.functions.deployGrouping(rgToken, erc721);
    }

    /** Helpers */
    public static encodeCall(functionName: string, args?: any[]): string {
        return encode(artifact, functionName, args)
    }

    public static decodeCall(data: string): DecodedCall | null {
        return decode(artifact, data)
    }
}