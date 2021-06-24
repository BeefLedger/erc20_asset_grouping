import { BigNumberish, BytesLike, ContractTransaction, ethers, Signer, Overrides } from "ethers";

import { MultiSigHashed } from "./types";
import { getMultisigHashedContract } from "./chain/prefabContractFactory";
import * as artifact from "./ethereum/abi/MultiSigHashed.json"
import { decode, encode } from "./ethereum/encodeCall";
import { DecodedCall } from "./abiDecoderController";
import { ProviderOrSigner } from "./localTypes";

export type Transaction = {
    destination: string;
    value: BigNumberish;
    data: string;
    executed: boolean;
    timestamp: BigNumberish;
    hash: string;
}

export class MultisigHashedController {

    private _signer: Signer;
    private _multisigHashedAddress : string
    private _multisigHashedContract? : MultiSigHashed

    constructor(_multisigHashedAddress: string, signerOrProvider: ProviderOrSigner) {
        this._multisigHashedAddress = _multisigHashedAddress;

        if(signerOrProvider instanceof Signer || signerOrProvider instanceof ethers.providers.JsonRpcSigner) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    private async _getMultisigHashedContract(): Promise<MultiSigHashed> {
        if(this._multisigHashedContract) {
            return this._multisigHashedContract
        }

        try {
            // Connect to the contract with my signer
            const contract = await getMultisigHashedContract(this._multisigHashedAddress, this._signer)
            this._multisigHashedContract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get MultisigHashed contract: ${e}`)
        }
    }

    /**Getters */
    public async getContract(): Promise<MultiSigHashed> {
        const multisigHashedContract = await this._getMultisigHashedContract();
        return multisigHashedContract
    }

    public async isConfirmed(hash: BytesLike): Promise<boolean> {
        const multisigHashedContract = await this._getMultisigHashedContract();
        return multisigHashedContract.isConfirmed(hash);
    }

    public async makeHash(destination: string, value: BigNumberish, data: BytesLike): Promise<string> {
        const multisigHashedContract = await this._getMultisigHashedContract();
        return multisigHashedContract.makeHash(destination, value, data);
    }

    public async getConfirmationCount(hash: BytesLike): Promise<BigNumberish> {
        const multisigHashedContract = await this._getMultisigHashedContract();
        return multisigHashedContract.getConfirmationCount(hash);
    }

    public async getOwners(): Promise<Array<string>> {
        const multisigHashedContract = await this._getMultisigHashedContract();
        return multisigHashedContract.getOwners();
    }

    public async getConfirmations(hash: BytesLike): Promise<Array<string>> {
        const multisigHashedContract = await this._getMultisigHashedContract();
        return multisigHashedContract.getConfirmations(hash);
    }

    public async getTransaction(hash: BytesLike): Promise<Transaction> {
        const multisigHashedContract = await this._getMultisigHashedContract();
        return multisigHashedContract.getTransaction(hash);
    }

    public async getTransactionByIdx(idx: BigNumberish): Promise<Transaction> {
        const multisigHashedContract = await this._getMultisigHashedContract();
        return multisigHashedContract.getTransactionByIdx(idx);
    }

    /**Setters */
    public async submitTransaction(
        destination: string, 
        value: BigNumberish, 
        data: BytesLike,
        overrides: Overrides
    ): Promise<ContractTransaction> {
        const multisigHashedContract = await this._getMultisigHashedContract();
        return multisigHashedContract.functions.submitTransaction(destination, value, data, overrides);
    }

    public async confirmTransaction(hash: BytesLike): Promise<ContractTransaction> {
        const multisigHashedContract = await this._getMultisigHashedContract();
        return multisigHashedContract.functions.confirmTransaction(hash);
    }

    public async revokeConfirmation(hash: BytesLike): Promise<ContractTransaction> {
        const multisigHashedContract = await this._getMultisigHashedContract();
        return multisigHashedContract.functions.revokeConfirmation(hash);
    }

    public async executeTransaction(hash: BytesLike): Promise<ContractTransaction> {
        const multisigHashedContract = await this._getMultisigHashedContract();
        return multisigHashedContract.functions.executeTransaction(hash);
    }

    /** Helpers */
    public static encodeCall(functionName: string, args?: any[]): string {
        return encode(artifact, functionName, args)
    }

    public static decodeCall(data: string): DecodedCall | null {
        return decode(artifact, data)
    }

}