import { Signer } from "ethers";
import { BigNumberish } from "ethers/utils";
import { getErc20Contract, getERC20FactoryContract } from "./chain/prefabContractFactory";
import { Erc20Factory } from "./types/Erc20Factory";

export class ERC20Factory {

    private _erc20FactoryAddress: string;
    private _signer: Signer;
    private _erc20FactoryContract? : Erc20Factory

    constructor(erc20FactoryAddress: string, signer: Signer) {
        this._erc20FactoryAddress = erc20FactoryAddress;
        this._signer = signer
    }

    



    private async _getERC20FactoryContract(): Promise<Erc20Factory> {
        if(this._erc20FactoryContract) {
            return this._erc20FactoryContract
        }

        try {
            //Connect to the contract with my signer
            const contract = await getERC20FactoryContract(this._erc20FactoryAddress, this._signer)
            this._erc20FactoryContract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get DealRoom contract: ${e}`)
        }
    }
}