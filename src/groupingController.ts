import { BigNumberish, ethers, Signer } from "ethers";
import { getGroupingContract } from "./chain/prefabContractFactory";
import { deployGrouping } from "./ethereum/deploy/deploy";
import { Grouping } from "./types";


export class GroupingController {

    private _signer: Signer;
    private _groupingAddress : string
    private _groupingContract? : Grouping

    constructor(groupingAddress: string, signerOrProvider: Signer | ethers.providers.ExternalProvider) {
        this._groupingAddress = groupingAddress;
        if(signerOrProvider instanceof Signer) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    

    public static async deployGroupingContract(signer: Signer, rgTokenAddress: string, erc721Address: string): Promise<Grouping> {
        return deployGrouping(signer, rgTokenAddress, erc721Address)
    }

    private async _getGroupingContract(): Promise<Grouping> {
        if(this._groupingContract) {
            return this._groupingContract
        }

        try {
            // Connect to the contract with my signer
            const contract = await getGroupingContract(this._groupingAddress, this._signer)
            this._groupingContract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get DealRoom contract: ${e}`)
        }
    }


    /** Getters */
    public async isAssetAdded(assetId: BigNumberish): Promise<boolean> {
        const erc721Contract = await this._getGroupingContract();
        return erc721Contract.isAssetAdded(assetId);
    }

    public async getAssets(): Promise<Array<BigNumberish>> {
        const erc721Contract = await this._getGroupingContract();
        return erc721Contract.getAssets();
    }

    public async getRGToken(): Promise<string> {
        const erc721Contract = await this._getGroupingContract();
        return erc721Contract.getRGToken();
    }

    public async getERC721Address(): Promise<string> {
        const erc721Contract = await this._getGroupingContract();
        return erc721Contract.getERC721Address();
    }
}