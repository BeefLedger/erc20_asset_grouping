import { BigNumberish, BytesLike, ContractTransaction, Signer } from "ethers";
import { getMultisigContract } from "./chain/prefabContractFactory";
import { initializeMultisig } from "./ethereum/deploy/deploy";
import { MultisigWalletV10 } from "./types";

export class MultisigController {
    private _signer: Signer;
    private _multisigAddress : string
    private _multisigContract? : MultisigWalletV10

    constructor(multisigAddress: string, signer: Signer) {
        this._multisigAddress = multisigAddress;
        this._signer = signer
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
            throw Error(`Failed to get DealRoom contract: ${e}`)
        }
    }

    /**Getters */
    public async isConfirmed(transactionId: BigNumberish): Promise<boolean> {
        const erc721Contract = await this._getMultisigContract();
        return erc721Contract.isConfirmed(transactionId);
    }

    public async getConfirmationCount(transactionId: BigNumberish): Promise<BigNumberish> {
        const erc721Contract = await this._getMultisigContract();
        return erc721Contract.getConfirmationCount(transactionId);
    }

    public async getTransactionCount(pending: boolean, executed: boolean): Promise<BigNumberish> {
        const erc721Contract = await this._getMultisigContract();
        return erc721Contract.getTransactionCount(pending, executed);
    }

    public async getConfirmations(transactionId: BigNumberish): Promise<Array<string>> {
        const erc721Contract = await this._getMultisigContract();
        return erc721Contract.getConfirmations(transactionId);
    }

    public async getTransactionIds(from: BigNumberish, to: BigNumberish, pending: boolean, executed: boolean): Promise<Array<BigNumberish>> {
        const erc721Contract = await this._getMultisigContract();
        return erc721Contract.getTransactionIds(from, to, pending, executed);
    }

    public async getOwners(): Promise<Array<string>> {
        const erc721Contract = await this._getMultisigContract();
        return erc721Contract.getOwners();
    }

    public async getTransaction(transactionId: BigNumberish): Promise<[string, string, boolean, BigNumberish]> {
        const erc721Contract = await this._getMultisigContract();
        return erc721Contract.getTransaction(transactionId);
    }

    public async getResourceActionsContract(): Promise<string> {
        const erc721Contract = await this._getMultisigContract();
        return erc721Contract.getResourceActionsContract();
    }



     /**Setters */
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