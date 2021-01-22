import { Signer } from "ethers";
import { getErc20Contract, getERC20FactoryContract } from "./chain/prefabContractFactory";
import { ERC20Factory } from "./types/ERC20Factory";
import { ERC20ForAssetGrouping } from "./types/ERC20ForAssetGrouping";

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

    public async deployERC20Contract(chainId: number, name: string, symbol: string): Promise<ERC20ForAssetGrouping> {

        let erc20Address: string

        const erc20FactoryContract = await this._getERC20FactoryContract();
        const tx = await erc20FactoryContract.functions.deploy(chainId, name, symbol)
        const receipt = await tx.wait()

        const newERC20Events = receipt.events?.filter(evt => evt.event === 'NewERC20')
        if (newERC20Events) { 
            if (newERC20Events.length > 0) {
                if (newERC20Events.length === 1) {
                    erc20Address = (newERC20Events[0]?.args as any).tokenAddress
                } else {
                    throw new Error("ERROR_MULTIPLE_EVENTS")
                }
            }
        } else {
            throw new Error("ERROR_NO_EVENT_FOUND")
        } 


        const erc20Contract = await getErc20Contract(erc20Address)
        return erc20Contract;
    }
}