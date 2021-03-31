import { BigNumberish, ContractTransaction, ethers, Signer } from "ethers";
import { ERC20ForAssetGrouping } from "./types/ERC20ForAssetGrouping";
import { getErc20Contract } from "./chain/prefabContractFactory";
import * as artifact from "./ethereum/abi/ERC20ForAssetGrouping.json"
import { decode, encode } from "./ethereum/encodeCall";
import { DecodedCall } from "./abiDecoderController";

export class ERC20Controller {

    private _erc20Address: string;
    private _signer: Signer;
    private _erc20Contract? : ERC20ForAssetGrouping

    constructor(erc20Address: string, signerOrProvider: Signer | ethers.providers.ExternalProvider) {
        this._erc20Address = erc20Address;
        if(signerOrProvider instanceof Signer) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    private async _getERC20Contract(): Promise<ERC20ForAssetGrouping> {
        if(this._erc20Contract) {
            return this._erc20Contract;
        }

        try {
            // Connect to the contract with my signer
            const contract = await getErc20Contract(this._erc20Address, this._signer);
            this._erc20Contract = contract;
            return contract;
        }
        catch (e) {
            throw Error(`Failed to get ERC20 contract: ${e}`);
        }
    }

    /**Getters */
    public async getContract(): Promise<ERC20ForAssetGrouping> {
        const erc20Contract = await this._getERC20Contract();
        return erc20Contract
    }

    public async balanceOf(address: string): Promise<BigNumberish> {
        const contract = await this._getERC20Contract();
        return contract.balanceOf(address);
    }

    public async getName(): Promise<string> {
        const contract = await this._getERC20Contract();
        return contract.name();
    }

    public async getSymbol(): Promise<string> {
        const contract = await this._getERC20Contract();
        return contract.symbol();
    }

    public async getChainId(): Promise<BigNumberish> {
        const contract = await this._getERC20Contract();
        return contract.chainId();
    }

    public async getGroupingContract(): Promise<string> {
        const contract = await this._getERC20Contract();
        return contract.assetGouping();
    }

    public async getTotalSupply(): Promise<BigNumberish> {
        const contract = await this._getERC20Contract();
        return contract.totalSupply();
    }

    public async getDecimals(): Promise<BigNumberish> {
        const contract = await this._getERC20Contract();
        return contract.decimals();
    }


    /** Setters */    
    public async transfer(recipient: string, amount: string): Promise<ContractTransaction> {
        const contract = await this._getERC20Contract();
        return contract.functions.transfer(recipient, amount)
    }

    public async transferOwnership(newOwner: string): Promise<ContractTransaction> {
        const contract = await this._getERC20Contract();
        return  contract.functions.transferOwnership(newOwner)
    }

    public async setGroupingContract(address: string): Promise<ContractTransaction> {
        const contract = await this._getERC20Contract();
        return contract.functions.setAssetGrouping(address)
    }

    public async mint(receiver: string, amount: BigNumberish): Promise<ContractTransaction> {
        const contract = await this._getERC20Contract();
        return contract.functions.mint(receiver, amount)
    }

    /** Helpers */
    public static encodeCall(functionName: string, args?: any[]): string {
        return encode(artifact, functionName, args)
    }

    public static decodeCall(data: string): DecodedCall | null {
        return decode(artifact, data)
    }

    
}