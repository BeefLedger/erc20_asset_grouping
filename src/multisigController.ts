import { BigNumberish, BytesLike, ContractTransaction, ethers, Signer } from "ethers";
import { getMultisigContract } from "./chain/prefabContractFactory";
import { initializeMultisig } from "./ethereum/deploy/deploy";
import { MultisigWalletV10 } from "./types";

import * as artifact from "./ethereum/abi/MultisigWalletV1_0.json"
import { encode } from "./ethereum/encodeCall";

export class MultisigController {
    private _signer: Signer;
    private _multisigAddress : string
    private _multisigContract? : MultisigWalletV10

    constructor(multisigAddress: string, signerOrProvider: Signer | ethers.providers.ExternalProvider) {
        this._multisigAddress = multisigAddress;
        if(signerOrProvider instanceof Signer) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider as any) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    public static async deployMultisigContract(signer: Signer, owners: Array<string>, requirement: BigNumberish): Promise<[MultisigWalletV10, string]> {
        return initializeMultisig(signer, owners, requirement)
    }

    private async _getMultisigContract(): Promise<MultisigWalletV10> {
        if(this._multisigContract) {
            return this._multisigContract
        }

        try {
            // Connect to the contract with my signer
            const contract = await getMultisigContract(this._multisigAddress, this._signer)
            this._multisigContract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get Multisig contract: ${e}`)
        }
    }

    /**Getters */
    public async getContract(): Promise<MultisigWalletV10> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract
    }

    public async isConfirmed(transactionId: BigNumberish): Promise<boolean> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.isConfirmed(transactionId);
    }

    public async getConfirmationCount(transactionId: BigNumberish): Promise<BigNumberish> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.getConfirmationCount(transactionId);
    }

    public async getTransactionCount(pending: boolean, executed: boolean): Promise<BigNumberish> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.getTransactionCount(pending, executed);
    }

    public async getConfirmations(transactionId: BigNumberish): Promise<Array<string>> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.getConfirmations(transactionId);
    }

    public async getTransactionIds(from: BigNumberish, to: BigNumberish, pending: boolean, executed: boolean): Promise<Array<BigNumberish>> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.getTransactionIds(from, to, pending, executed);
    }

    public async getOwners(): Promise<Array<string>> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.getOwners();
    }

    public async getTransaction(transactionId: BigNumberish): Promise<[string, string, boolean, BigNumberish]> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.getTransaction(transactionId);
    }

    public async getResourceActionsContract(): Promise<string> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.getResourceActionsContract();
    }

    public async getRequiredSignatures(): Promise<BigNumberish> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.required();
    }



     /**Setters */
     public encodeCall(functionName: string, args?: any[]): string {
        return encode(artifact, functionName, args)
    }
    
     public async setResourceActionsContract(newAddress: string): Promise<ContractTransaction> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.functions.setResourceActionsContract(newAddress);
    }

    public async addOwner(newOwner: string): Promise<ContractTransaction> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.functions.addOwner(newOwner);
    }

    public async removeOwner(newOwner: string): Promise<ContractTransaction> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.functions.removeOwner(newOwner);
    }

    public async replaceOwner(owner: string, newOwner: string): Promise<ContractTransaction> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.functions.replaceOwner(owner, newOwner);
    }

    public async changeRequirement(newRequirement: BigNumberish): Promise<ContractTransaction> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.functions.changeRequirement(newRequirement);
    }

    public async submitTransaction(destination: string, value: BigNumberish, data: BytesLike): Promise<ContractTransaction> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.functions.submitTransaction(destination, value, data);
    }

    public async confirmTransaction(transactionId: BigNumberish): Promise<ContractTransaction> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.functions.confirmTransaction(transactionId);
    }

    public async revokeConfirmation(transactionId: BigNumberish): Promise<ContractTransaction> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.functions.revokeConfirmation(transactionId);
    }

    public async executeTransaction(transactionId: BigNumberish): Promise<ContractTransaction> {
        const multisigContract = await this._getMultisigContract();
        return multisigContract.functions.executeTransaction(transactionId);
    }


}