import { ContractTransaction, Signer } from "ethers";
import { getERC20FactoryContract } from "./chain/prefabContractFactory";
import { ERC20FactoryV10 } from "./types/ERC20FactoryV10";
import { ERC20FactoryV11 } from "./types/ERC20FactoryV11";

import { initializeERC20Factory, upgradeERC20Factory } from './ethereum/deploy/deploy'


export class ERC20FactoryController {

    private _erc20FactoryAddress: string;
    private _signer: Signer;
    private _erc20FactoryContract? : ERC20FactoryV10

    constructor(erc20FactoryAddress: string, signer: Signer) {
        this._erc20FactoryAddress = erc20FactoryAddress;
        this._signer = signer
    }

    public static async deployERC20FactoryContract(signer: Signer): Promise<[ERC20FactoryV10, string]> {
        return initializeERC20Factory(signer)
    }

    public async upgradeERC20FactoryContractV11(signer: Signer, proxyAddress: string): Promise<ERC20FactoryV11> {
        return upgradeERC20Factory(signer, proxyAddress)
    }

    private async _getERC20FactoryContract(): Promise<ERC20FactoryV10 | ERC20FactoryV11> {
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