import { BigNumberish, BytesLike, ContractTransaction, ethers, Signer, Overrides } from "ethers";

import { CompaniesV10 } from "./types";
import { getCompaniesContract } from "./chain/prefabContractFactory";
import * as artifact from "./ethereum/abi/CompaniesV1_0.json"
import { encode } from "./ethereum/encodeCall";


export class CompaniesController {

    private _signer: Signer;
    private _companiesAddress : string
    private _companiesContract? : CompaniesV10

    constructor(_companiesAddress: string, signerOrProvider: Signer | ethers.providers.ExternalProvider) {
        this._companiesAddress = _companiesAddress;
        if(signerOrProvider instanceof Signer) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    private async _getCompaniesContract(): Promise<CompaniesV10> {
        if(this._companiesContract) {
            return this._companiesContract
        }

        try {
            // Connect to the contract with my signer
            const contract = await getCompaniesContract(this._companiesAddress, this._signer)
            this._companiesContract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get Companies contract: ${e}`)
        }
    }

    /**Getters */
    public async getContract(): Promise<CompaniesV10> {
        const companiesContract = await this._getCompaniesContract();
        return companiesContract
    }

    public async getAllCompanies(): Promise<Array<string>> {
        const companiesContract = await this._getCompaniesContract();
        return companiesContract.getAllCompanies();
    }

    public async isAddressCompany(address: string): Promise<boolean> {
        const companiesContract = await this._getCompaniesContract();
        return companiesContract.isAddressCompany(address);
    }

    public async getCompanyBySignatorie(address: string): Promise<string> {
        const companiesContract = await this._getCompaniesContract();
        return companiesContract.getCompanyBySignatorie(address);
    }

    public async getCompanyByAddress(address: string): Promise<[BigNumberish, Array<string>, string, BytesLike, boolean]> {
        const companiesContract = await this._getCompaniesContract();
        return companiesContract.getCompanyByAddress(address);
    }

    public async getCompanyByName(address: string): Promise<[BigNumberish, Array<string>, string, BytesLike, boolean]> {
        const companiesContract = await this._getCompaniesContract();
        return companiesContract.getCompanyByName(address);
    }

    public async isSignatorieAuthorized(address: string): Promise<boolean> {
        const companiesContract = await this._getCompaniesContract();
        return companiesContract.isSignatorieAuthorized(address);
    }


    /**Setters */
    public encodeCall(functionName: string, args?: any[]): string {
        return encode(artifact, functionName, args)
    }

    public async addCompany(
        address: string, 
        name: string, 
        ipfsLink: BytesLike, 
        overrides?: Overrides
    ): Promise<ContractTransaction> {
        const companiesContract = await this._getCompaniesContract();
        return companiesContract.functions.addCompany(address, name, ipfsLink);
    }

    public async removeCompany(address: string, overrides?: Overrides): Promise<ContractTransaction> {
        const companiesContract = await this._getCompaniesContract();
        return companiesContract.functions.removeCompany(address, overrides);
    }

    public async addSignatorie(address: string, overrides?: Overrides): Promise<ContractTransaction> {
        const companiesContract = await this._getCompaniesContract();
        return companiesContract.functions.addSignatorie(address, overrides);
    }

    public async removeSignatorie(address: string, overrides?: Overrides): Promise<ContractTransaction> {
        const companiesContract = await this._getCompaniesContract();
        return companiesContract.functions.removeSignatorie(address, overrides);
    }

    public async setCompanyData(name: string, ipfsLink: BytesLike, overrides?: Overrides): Promise<ContractTransaction> {
        const companiesContract = await this._getCompaniesContract();
        return companiesContract.functions.setCompanyData(name, ipfsLink, overrides);
    }
}