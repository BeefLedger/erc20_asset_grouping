import { Signer } from "ethers";
import { BigNumberish } from "ethers/utils";
import { Ierc20 } from "./types/Ierc20";
import { getErc20Contract } from "./chain/prefabContractFactory";

export class ERC20 {

    private _erc20Address: string;
    private _signer: Signer;
    private _erc20Contract? : Ierc20

    constructor(erc20Address: string, signer: Signer) {
        this._erc20Address = erc20Address;
        this._signer = signer
    }

    public async balanceOf(): Promise<BigNumberish> {
        const contract = await this._getERC20Contract();
        return contract.balanceOf(await this._signer.getAddress())
    }

    private async _getERC20Contract(): Promise<Ierc20> {
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