import { ContractTransaction, ethers, Signer } from "ethers";
import { ResourceActionsV10 } from "./types";
import { getResourceActionsContract } from "./chain/prefabContractFactory";
import * as artifact from "./ethereum/abi/ResourceActionsV1_0.json"
import { decode, encode } from "./ethereum/encodeCall";

export enum Action {
    PRODUCE,
    PICK_UP,
    DROP_OFF,
    MODIFY,
    MOVE,
    TRANSFER_COMPLETE,
    ACCEPT,
    TRANSFER_CUSTODY,
    TRANSFER_ALL_RIGHTS,
    MEASURE
}

export class ResourceActionsController {

    private _signer: Signer;
    private _resourceActionsAddress : string
    private _resourceActionsContract? : ResourceActionsV10

    constructor(_resourceActionsAddress: string, signerOrProvider: Signer | ethers.providers.ExternalProvider) {
        this._resourceActionsAddress = _resourceActionsAddress;
        if(signerOrProvider instanceof Signer) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    private async _getResourceActionsContract(): Promise<ResourceActionsV10> {
        if(this._resourceActionsContract) {
            return this._resourceActionsContract
        }

        try {
            // Connect to the contract with my signer
            const contract = await getResourceActionsContract(this._resourceActionsAddress, this._signer)
            this._resourceActionsContract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get ResourceActions contract: ${e}`)
        }
    }

    /**Getters */
    public async getContract(): Promise<ResourceActionsV10> {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract
    }

    public async getPermission(action: Action, companyOrUserAddress: string): Promise<boolean> {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.getPermission(action, companyOrUserAddress);
    }

    public async getProduceAction(): Promise<Action> {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.getProduceAction();
    }

    public async getDropOffAction(): Promise<Action> {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.getDropOffAction();
    }

    public async getPickUpAction(): Promise<Action> {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.getPickUpAction();
    }

    public async getModifyAction(): Promise<Action> {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.getModifyAction();
    }

    public async getMoveAction(): Promise<Action> {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.getMoveAction();
    }

    public async getTransferCompleteAction(): Promise<Action> {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.getTransferCompleteAction();
    }

    public async getMeasureAction(): Promise<Action> {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.getMeasureAction();
    }

    public async getPermissions(
         companyOrUserAddress: string
    ): Promise<[
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean ]> 
    {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.getPermissions(companyOrUserAddress);
    }

    public async getAllActions()
    : Promise<[
        Action,
        Action,
        Action,
        Action,
        Action,
        Action,
        Action,
        Action,
        Action,
        Action ]> 
    {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.getAllActions();
    }

    public async getCompaniesContract(): Promise<string> {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.getCompaniesContract();
    }

    public async getCompanyBySignatorie(userAddress: string): Promise<string> {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.getCompanyBySignatorie(userAddress);
    }


     /**Setters */
    public async setCompaniesContract(address: string): Promise<ContractTransaction> {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.functions.setCompaniesContract(address);
    }

    public async setPermission(
        action: Action, 
        companyAddress: string, 
        allow: boolean
    ): Promise<ContractTransaction> {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.functions.setPermission(action, companyAddress, allow);
    }

    public async setPermissions(
        actions: Array<Action>, 
        companyAddress: string, 
        allow: boolean
    ): Promise<ContractTransaction> {
        const resourceActionsContract = await this._getResourceActionsContract();
        return resourceActionsContract.functions.setPermissions(actions, companyAddress, allow);
    }

    /** Helpers */
    public static encodeCall(functionName: string, args?: any[]): string {
        return encode(artifact, functionName, args)
    }

    public static decodeCall(data: string): string {
        return decode(artifact, data)
    }
}