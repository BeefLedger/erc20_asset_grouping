import { Signer } from "ethers";
import { BigNumberish } from "ethers/utils";
import { Erc20ForAssetGrouping } from "./types/Erc20ForAssetGrouping";
import { getErc20Contract } from "./chain/prefabContractFactory";
import { ContractReceipt } from "ethers/contract";

export class ERC20Controller {

    private _erc20Address: string;
    private _signer: Signer;
    private _erc20Contract? : Erc20ForAssetGrouping

    constructor(erc20Address: string, signer: Signer) {
        this._erc20Address = erc20Address;
        this._signer = signer
    }

    public async balanceOf(): Promise<BigNumberish> {
        const contract = await this._getERC20Contract();
        return contract.balanceOf(await this._signer.getAddress())
    }

    public async transfer(recipient: string, amount: string): Promise<ContractReceipt> {
        const contract = await this._getERC20Contract();
        return (await contract.functions.transfer(recipient, amount)).wait()
    }

    public async transferOwnership(newOwner: string): Promise<ContractReceipt> {
        const contract = await this._getERC20Contract();
        return  (await contract.functions.transferOwnership(newOwner)).wait()
    }

    private async _getERC20Contract(): Promise<Erc20ForAssetGrouping> {
        if(this._erc20Contract) {
            return this._erc20Contract
        }

        try {
            //Connect to the contract with my signer
            const contract = await getErc20Contract(this._erc20Address, this._signer)
            this._erc20Contract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get DealRoom contract: ${e}`)
        }
    }
}