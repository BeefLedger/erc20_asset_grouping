import { BigNumberish, ContractTransaction, ethers, Signer, Overrides } from "ethers";
import { getActionsStorageContract } from "./chain/prefabContractFactory";
import { ActionsStorageV10 } from "./types";
import * as artifact from "./ethereum/abi/ActionsStorageV1_1.json"
import { encode } from "./ethereum/encodeCall";

export class ActionsStorageController {

    private _actionsStorageAddress: string;
    private _signer: Signer;
    private _actionsStorageContract? : ActionsStorageV10

    constructor(actionsStorageAddress: string, signerOrProvider: Signer | ethers.providers.ExternalProvider) {
        this._actionsStorageAddress = actionsStorageAddress;
        if(signerOrProvider instanceof Signer) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    private async _getActionsStorageContract(): Promise<ActionsStorageV10> {
        if(this._actionsStorageContract) {
            return this._actionsStorageContract;
        }

        try {
            // Connect to the contract with my signer
            const contract = await getActionsStorageContract(this._actionsStorageAddress, this._signer);
            this._actionsStorageContract = contract;
            return contract;
        }
        catch (e) {
            throw Error(`Failed to get ActionsStorageContract contract: ${e}`);
        }
    }

    /** Getters */
    public async getContract(): Promise<ActionsStorageV10> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract
    }

    public async getEntriesByCompany(companyAddress: string): Promise<Array<BigNumberish>> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.getEntriesByCompany(companyAddress);
    }

    public async getEntriesByUser(userAddress: string): Promise<Array<BigNumberish>> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.getEntriesByUser(userAddress);
    }

    public async getEntryData(
        entryNumber: BigNumberish
    ): Promise<[
      number,
      string,
      string,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      string[],
      boolean,
      boolean,
      BigNumberish,
      BigNumberish
    ]> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.getEntryData(entryNumber);
    }

    public async getNumOfValidations(entryNumber: BigNumberish): Promise<BigNumberish> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.getNumOfValidations(entryNumber);
    }

    public async getValidation(entryNumber: BigNumberish, position: BigNumberish): Promise<[string, string, BigNumberish]> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.getValidation(entryNumber, position);
    }

    public async userHasValidated(userAddress: string, entryNumber: BigNumberish): Promise<boolean> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.userHasValidated(userAddress, entryNumber);
    }

    public async userCanValidate(entryNumber: BigNumberish): Promise<boolean> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.userCanValidate(entryNumber);
    }

    public async indexOf(allowedCompanies: Array<string>, companyAddress: string): Promise<BigNumberish> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.indexOf(allowedCompanies, companyAddress);
    }

    /** Overriden in V1_1 */
    public async isCompanyOwner(companyAddress: string, assetId: BigNumberish): Promise<boolean> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.isCompanyOwner(companyAddress, assetId);
    }

    public async getResourceActionsContract(): Promise<string> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.getResourceActionsContract();
    }

     /** Overriden in V1_1 */
    public async getERC721Contract(): Promise<string> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.getERC721Contract();
    }

    public async getCompaniesContract(): Promise<string> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.getCompaniesContract();
    }


    /**Setters */
    public encodeCall(functionName: string, args?: any[]): string {
        return encode(artifact, functionName, args)
    }

    public async setResourceActionsContract(newAddress: string, overrides?: Overrides): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.setResourceActionsContract(newAddress, overrides);
    }

    /** Overriden in V1_1 */
    public async setERC721(newAddress: string, overrides?: Overrides): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.setERC721(newAddress, overrides);
    }

    public async approveProduce(entryNumber: BigNumberish, overrides?: Overrides): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.approveProduce(entryNumber, overrides);
    }

    public async produce(assetsIds: Array<BigNumberish>, overrides?: Overrides): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.produce(assetsIds, overrides);
    }

    public async measure(
        assetsIds: Array<BigNumberish>, 
        requiredSignatures: BigNumberish, 
        companiesInvolved: Array<string>, 
        overrides?: Overrides
    ): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.measure(assetsIds, requiredSignatures, companiesInvolved, overrides);
    }

    public async pickUp(
        assetsIds: Array<BigNumberish>, 
        requiredSignatures: BigNumberish, 
        companiesInvolved: Array<string>,
        overrides?: Overrides
    ): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.pickUp(assetsIds, requiredSignatures, companiesInvolved, overrides);
    }

    public async dropOff(
        assetsIds: Array<BigNumberish>, 
        requiredSignatures: BigNumberish, 
        companiesInvolved: Array<string>,
        outputOf: BigNumberish,
        overrides?: Overrides
    ): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.dropOff(assetsIds, requiredSignatures, companiesInvolved, outputOf, overrides);
    }

    public async validateEntry(entryNumber: BigNumberish, overrides?: Overrides): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.validateEntry(entryNumber, overrides);
    }
}