import { ContractTransaction, Signer } from "ethers";
import { getERC20FactoryContract } from "./chain/prefabContractFactory";
import { ERC20Factory } from "./types/ERC20Factory";

import { deployERC20Factory } from './ethereum/deploy/deploy'


export class ERC20FactoryController {

    private _erc20FactoryAddress: string;
    private _signer: Signer;
    private _erc20FactoryContract? : ERC20Factory

    constructor(erc20FactoryAddress: string, signer: Signer) {
        this._erc20FactoryAddress = erc20FactoryAddress;
        this._signer = signer
    }

    public static async deployERC20FactoryContract(signer: Signer): Promise<ERC20Factory> {
        return deployERC20Factory(signer)
    }

    private async _getERC20FactoryContract(): Promise<ERC20Factory> {
        if(this._erc20FactoryContract) {
            return this._erc20FactoryContract
        }

        try {
            // Connect to the contract with my signer
            const contract = await getERC20FactoryContract(this._erc20FactoryAddress, this._signer)
            this._erc20FactoryContract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get DealRoom contract: ${e}`)
        }
    }

    public async getOwner(): Promise<string> {
        const erc20FactoryContract = await this._getERC20FactoryContract();
        return erc20FactoryContract.owner();
    }

    public async getTokens(): Promise<Array<string>> {
        const erc20FactoryContract = await this._getERC20FactoryContract();
        return erc20FactoryContract.getTokens();
    }

    public async deployERC20Contract(chainId: number, name: string, symbol: string): Promise<ContractTransaction> {
        const erc20FactoryContract = await this._getERC20FactoryContract();
        return erc20FactoryContract.functions.deploy(chainId, name, symbol)
    }
}