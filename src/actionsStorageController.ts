import { BigNumberish, ContractTransaction, ethers, Signer } from "ethers";
import { getActionsStorageContract } from "./chain/prefabContractFactory";
import { ActionsStorageV10 } from "./types";

interface EntryData {
    entryType: BigNumberish,
    company: string,
    signatorie: string,
    uids: Array<BigNumberish>,
    timestamp: BigNumberish,
    required: BigNumberish,
    allowedCompanies: Array<string>,
    requiresMultisig: boolean,
    approved: boolean,
    inputOf: BigNumberish,
    outputOf: BigNumberish
}

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
            throw Error(`Failed to get DealRoom contract: ${e}`);
        }
    }

    /** Getters */
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
    public async setResourceActionsContract(newAddress: string): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.setResourceActionsContract(newAddress);
    }

    /** Overriden in V1_1 */
    public async setERC721(newAddress: string): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.setERC721(newAddress);
    }

    public async approveProduce(entryNumber: BigNumberish): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.approveProduce(entryNumber);
    }

    public async produce(assetsIds: Array<BigNumberish>): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.produce(assetsIds);
    }

    public async measure(assetsIds: Array<BigNumberish>, requiredSignatures: BigNumberish, companiesInvolved: Array<string>): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.measure(assetsIds, requiredSignatures, companiesInvolved);
    }

    public async pickUp(assetsIds: Array<BigNumberish>, requiredSignatures: BigNumberish, companiesInvolved: Array<string>): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.pickUp(assetsIds, requiredSignatures, companiesInvolved);
    }

    public async dropOff(
        assetsIds: Array<BigNumberish>, 
        requiredSignatures: BigNumberish, 
        companiesInvolved: Array<string>,
        outputOf: BigNumberish
    ): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.dropOff(assetsIds, requiredSignatures, companiesInvolved, outputOf);
    }

    public async validateEntry(entryNumber: BigNumberish): Promise<ContractTransaction> {
        const actionsStorageContract = await this._getActionsStorageContract();
        return actionsStorageContract.functions.validateEntry(entryNumber);
    }
}