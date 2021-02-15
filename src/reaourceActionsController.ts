import { BigNumberish, BytesLike, ContractTransaction, ethers, Signer } from "ethers";
import { ResourceActionsV10 } from "./types";
import { getResourceActionsContract } from "./chain/prefabContractFactory";

export class ResourceActionsController {

    private _signer: Signer;
    private _resourceActionsAddress : string
    private _resourceActionsContract? : ResourceActionsV10

    constructor(_resourceActionsAddress: string, signerOrProvider: Signer | ethers.providers.ExternalProvider) {
        this._resourceActionsAddress = _resourceActionsAddress;
        if(signerOrProvider instanceof Signer) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    private async _getResourceActionsContract(): Promise<ResourceActionsV10> {
        if(this._resourceActionsContract) {
            return this._resourceActionsContract
        }

        try {
            // Connect to the contract with my signer
            const contract = await getResourceActionsContract(this._resourceActionsAddress, this._signer)
            this._resourceActionsContract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get DealRoom contract: ${e}`)
        }
    }
}