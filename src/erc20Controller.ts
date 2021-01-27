import { BigNumberish, ContractReceipt, Signer } from "ethers";
import { ERC20ForAssetGrouping } from "./types/ERC20ForAssetGrouping";
import { getErc20Contract } from "./chain/prefabContractFactory";

export class ERC20Controller {

    private _erc20Address: string;
    private _signer: Signer;
    private _erc20Contract? : ERC20ForAssetGrouping

    constructor(erc20Address: string, signer: Signer) {
        this._erc20Address = erc20Address;
        this._signer = signer;
    }

    public async balanceOf(): Promise<BigNumberish> {
        const contract = await this._getERC20Contract();
        return contract.balanceOf(await this._signer.getAddress());
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
 
    public async transfer(recipient: string, amount: string): Promise<ContractReceipt> {
        const contract = await this._getERC20Contract();
        return (await contract.functions.transfer(recipient, amount)).wait();
    }

    public async transferOwnership(newOwner: string): Promise<ContractReceipt> {
        const contract = await this._getERC20Contract();
        return  (await contract.functions.transferOwnership(newOwner)).wait();
    }

    public async setGroupingContracts(address: string): Promise<ContractReceipt> {
        const contract = await this._getERC20Contract();
        return (await contract.functions.setAssetGrouping(address)).wait();
    }

    public async mint(receiver: string, amount: BigNumberish): Promise<ContractReceipt> {
        const contract = await this._getERC20Contract();
        return (await contract.functions.mint(receiver, amount)).wait();
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
            throw Error(`Failed to get DealRoom contract: ${e}`);
        }
    }
}