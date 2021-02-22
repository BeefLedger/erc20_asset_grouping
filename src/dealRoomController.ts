import { BigNumberish, ContractTransaction, ethers, Signer, Overrides } from "ethers";

import { DealRoom } from "./types";
import { getDealRoomContract } from "./chain/prefabContractFactory";
import * as artifact from "./ethereum/abi/DealRoom.json"
import { encode } from "./ethereum/encodeCall";

export type Deal = {
    id: BigNumberish;
    erc20: string;
    erc721: string;
    price: BigNumberish;
    assetItems: BigNumberish[];
    status: number;
    valid: boolean;
}

export enum DealStatus {
    Undefined,
    Open,
    Cancelled,
    Settled
}

export class DealRoomController {

    private _signer: Signer;
    private _dealRoomAddress : string
    private _dealRoomContract? : DealRoom

    constructor(_dealRoomAddress: string, signerOrProvider: Signer | ethers.providers.ExternalProvider) {
        this._dealRoomAddress = _dealRoomAddress;
        if(signerOrProvider instanceof Signer) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    private async _getDealRoomContract(): Promise<DealRoom> {
        if(this._dealRoomContract) {
            return this._dealRoomContract
        }

        try {
            // Connect to the contract with my signer
            const contract = await getDealRoomContract(this._dealRoomAddress, this._signer)
            this._dealRoomContract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get DealRoom contract: ${e}`)
        }
    }

    /**Getters */
    public async getContract(): Promise<DealRoom> {
        const dealRoomContract = await this._getDealRoomContract();
        return dealRoomContract
    }

    public async getOwner(): Promise<string> {
        const dealRoomContract = await this._getDealRoomContract();
        return dealRoomContract.getOwner();
    }

    public async getBuyer(): Promise<string> {
        const dealRoomContract = await this._getDealRoomContract();
        return dealRoomContract.getBuyer();
    }

    public async getSeller(): Promise<string> {
        const dealRoomContract = await this._getDealRoomContract();
        return dealRoomContract.getSeller();
    }

    public async getDeal(id: BigNumberish): Promise<Deal> {
        const dealRoomContract = await this._getDealRoomContract();
        return dealRoomContract.getDeal(id);
    }

    public async getDealCount(): Promise<BigNumberish> {
        const dealRoomContract = await this._getDealRoomContract();
        return dealRoomContract.getDealCount();
    }

    public async getDealStatus(id: BigNumberish): Promise<DealStatus> {
        const dealRoomContract = await this._getDealRoomContract();
        return dealRoomContract.getDealStatus(id);
    }

    public async missingDealAssets(id: BigNumberish): Promise<BigNumberish> {
        const dealRoomContract = await this._getDealRoomContract();
        return dealRoomContract.missingDealAssets(id);
    }

    public async missingDealCoins(id: BigNumberish): Promise<BigNumberish> {
        const dealRoomContract = await this._getDealRoomContract();
        return dealRoomContract.missingDealCoins(id);
    }

    /**Setters */
    public encodeCall(functionName: string, args?: any[]): string {
        return encode(artifact, functionName, args)
    }

    public async makeDeal(
        erc20: string, 
        erc721: string, 
        price: BigNumberish, 
        assets: Array<BigNumberish>, 
        overrides?: Overrides
    ): Promise<ContractTransaction> {
        const dealRoomContract = await this._getDealRoomContract();
        return dealRoomContract.functions.makeDeal(erc20, erc721, price, assets, overrides);
    }

    public async settle(id: BigNumberish): Promise<ContractTransaction> {
        const dealRoomContract = await this._getDealRoomContract();
        return dealRoomContract.functions.settle(id);
    }

    public async withdrawDealAssets(id: BigNumberish, count: BigNumberish): Promise<ContractTransaction> {
        const dealRoomContract = await this._getDealRoomContract();
        return dealRoomContract.functions.withdrawDealAssets(id, count);
    }

    public async withdrawDealCoins(id: BigNumberish): Promise<ContractTransaction> {
        const dealRoomContract = await this._getDealRoomContract();
        return dealRoomContract.functions.withdrawDealCoins(id);
    }
}