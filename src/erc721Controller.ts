import { BigNumberish, ContractTransaction, ethers, Signer } from "ethers";
import { getERC721Contract } from "./chain/prefabContractFactory";

import { initializeERC721, upgradeERC721 } from './ethereum/deploy/deploy'
import { ERC721BeefLedgerV10 } from "./types";
import { ERC721BeefLedgerV11 } from "./types/ERC721BeefLedgerV11";


export class ERC721Controller {

    private _signer: Signer;
    private _erc721Address : string
    private _erc721Contract? : ERC721BeefLedgerV11

    constructor(erc721Address: string, signerOrProvider: Signer | ethers.providers.ExternalProvider) {
        this._erc721Address = erc721Address;
        if(signerOrProvider instanceof Signer) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    public static async deployERC721Contract(signer: Signer, multisigAddress: string): Promise<[ERC721BeefLedgerV10, string]> {
        return initializeERC721(signer, multisigAddress)
    }

    public async upgradeERC721ContractV11(signer: Signer, proxyAddress: string): Promise<ERC721BeefLedgerV11> {
        return upgradeERC721(signer, proxyAddress)
    }

    private async _getERC721Contract(): Promise<ERC721BeefLedgerV11> {
        if(this._erc721Contract) {
            return this._erc721Contract
        }

        try {
            // Connect to the contract with my signer
            const contract = await getERC721Contract(this._erc721Address, this._signer)
            this._erc721Contract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get DealRoom contract: ${e}`)
        }
    }

    /** Getters */
    public async balanceOf(user: string): Promise<BigNumberish> {
        const erc721Contract = await this._getERC721Contract();
        return erc721Contract.balanceOf(user);
    }

    public async getApproved(tokenId: BigNumberish): Promise<string> {
        const erc721Contract = await this._getERC721Contract();
        return erc721Contract.getApproved(tokenId);
    }

    public async isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        const erc721Contract = await this._getERC721Contract();
        return erc721Contract.isApprovedForAll(owner, operator);
    }

    public async exists(tokenId: BigNumberish): Promise<boolean> {
        const erc721Contract = await this._getERC721Contract();
        return erc721Contract.exists(tokenId);
    }

    public async getTotalTokens(): Promise<BigNumberish> {
        const erc721Contract = await this._getERC721Contract();
        return erc721Contract.getTotalTokens();
    }

    public async getOwner(tokenId: BigNumberish): Promise<string> {
        const erc721Contract = await this._getERC721Contract();
        return erc721Contract.getOwner(tokenId);
    }

    /** Version 1_1 */
    public async getGroupingAddress(tokenId: BigNumberish): Promise<string> {
        const erc721Contract = await this._getERC721Contract();
        return erc721Contract.getGroupingAddress(tokenId);
    }
    

    /**Setters */
    public async setMultisigWallet(newAddress: string): Promise<ContractTransaction> {
        const erc721Contract = await this._getERC721Contract();
        return erc721Contract.functions.setMultisigWallet(newAddress);
    }

    public async approve(to: string, tokenId: BigNumberish): Promise<ContractTransaction> {
        const erc721Contract = await this._getERC721Contract();
        return erc721Contract.functions.approve(to, tokenId);
    }

    public async setApprovalForAll(to: string, approved: boolean): Promise<ContractTransaction> {
        const erc721Contract = await this._getERC721Contract();
        return erc721Contract.functions.setApprovalForAll(to, approved);
    }

    public async transferFrom(from: string, to: string, tokenId: BigNumberish): Promise<ContractTransaction> {
        const erc721Contract = await this._getERC721Contract();
        return erc721Contract.functions.transferFrom(from, to, tokenId);
    }

    public async mint(to: string, tokenIds: Array<BigNumberish>): Promise<ContractTransaction> {
        const erc721Contract = await this._getERC721Contract();
        return erc721Contract.functions.mint(to, tokenIds);
    }

    public async burn(tokenId: BigNumberish): Promise<ContractTransaction> {
        const erc721Contract = await this._getERC721Contract();
        return erc721Contract.functions.burn(tokenId);
    }

    /** Version 1_1 */
    public async addAssetsToGrouping(tokenIds: Array<BigNumberish>, groupingAddress: string): Promise<ContractTransaction> {
        const erc721Contract = await this._getERC721Contract();
        return erc721Contract.functions.addAssetsToGrouping(tokenIds, groupingAddress);
    }
}