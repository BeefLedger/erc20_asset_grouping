import { BigNumberish, ContractTransaction, ethers, Signer, Overrides } from "ethers";

import { DealRoomHubV10 } from "./types";
import { getDealRoomHubContract } from "./chain/prefabContractFactory";
import * as artifact from "./ethereum/abi/DealRoomHubV1_0.json"
import { encode } from "./ethereum/encodeCall";

export type DealRoomCreateParams = {
    dealRoomHubAddress: string
    buyer: string
    seller: string
    arbitrator: string
    docApprover: string
    sensorApprover: string
}

export type DealRoomDetails = {
    addr: string
    buyer: string
    seller: string
    arbitrator: string
    sensorApprover: string
    docApprover: string
    dealMultiSig: string
    agentMultiSig: string
}

export class DealRoomHubController {

    private _signer: Signer;
    private _dealRoomHubAddress : string
    private _dealRoomHubContract? : DealRoomHubV10

    constructor(_dealRoomHubAddress: string, signerOrProvider: Signer | ethers.providers.ExternalProvider) {
        this._dealRoomHubAddress = _dealRoomHubAddress;
        if(signerOrProvider instanceof Signer) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    private async _getDealRoomHubContract(): Promise<DealRoomHubV10> {
        if(this._dealRoomHubContract) {
            return this._dealRoomHubContract
        }

        try {
            // Connect to the contract with my signer
            const contract = await getDealRoomHubContract(this._dealRoomHubAddress, this._signer)
            this._dealRoomHubContract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get DealRoomHub contract: ${e}`)
        }
    }

    /**Getters */
    public async getContract(): Promise<DealRoomHubV10> {
        const dealRoomHubContract = await this._getDealRoomHubContract();
        return dealRoomHubContract
    }

    public async getUserRooms(address: string): Promise<Array<string>> {
        const dealRoomHubContract = await this._getDealRoomHubContract();
        return dealRoomHubContract.getUserRooms(address);
    }

    public async getAllRooms(): Promise<Array<string>> {
        const dealRoomHubContract = await this._getDealRoomHubContract();
        return dealRoomHubContract.getAllRooms();
    }

    public async getRoom(roomAddress: string): Promise<DealRoomDetails> {
        const dealRoomHubContract = await this._getDealRoomHubContract();
        return dealRoomHubContract.getRoom(roomAddress);
    }

    public async roomCount(): Promise<BigNumberish> {
        const dealRoomHubContract = await this._getDealRoomHubContract();
        return dealRoomHubContract.roomCount();
    }

    /**Setters */
    public encodeCall(functionName: string, args?: any[]): string {
        return encode(artifact, functionName, args)
    }

    public async makeRoom(params: DealRoomCreateParams, overrides?: Overrides): Promise<ContractTransaction> {
        const dealRoomHubContract = await this._getDealRoomHubContract();
        return dealRoomHubContract.functions.makeRoom(params, overrides);
    }

    public async changeOwner(newOwner: string, overrides?: Overrides): Promise<ContractTransaction> {
        const dealRoomHubContract = await this._getDealRoomHubContract();
        return dealRoomHubContract.functions.changeOwner(newOwner, overrides);
    }
}