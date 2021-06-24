import { BigNumber, ethers, Signer } from "ethers";
import { getMultisigContract } from "../chain/prefabContractFactory";

import { MultisigController } from "../multisigController";
import { ERC721Controller } from "../erc721Controller";
import { ERC721BeefLedgerV10, MultisigWalletV10 } from "../types";

let provider: ethers.providers.JsonRpcProvider;
let signers: Signer[] = []

const MINUTE_MS = 60 * 1000

describe("Grouping test", () => {
    beforeAll(async () => {
      //Deploy ERC20 and ERC720, mint some and assign them
      provider = new ethers.providers.JsonRpcProvider()
  
      for(let j = 0; j < 10; j++) {
        signers.push(provider.getSigner(j))
      }
  
    }, 1 * MINUTE_MS)
  
    it("Deploys MultisigV10 ERC721BeefLedgerV11 and adds owner", async (): Promise<any> => {
        
        const owner1 = await signers[0].getAddress(); 
        const owner2 = await signers[1].getAddress(); 
        const owner3 = await signers[2].getAddress(); 
        const owner4 = await signers[3].getAddress(); 
        const owners = [owner1, owner2, owner3];


        /** Multisig contract deployment */
        const [multisigContract, multisigProxyAddress]: [MultisigWalletV10, string] = await MultisigController.deployMultisigContract(signers[0], owners, 1);
        const multisigContractAddress = multisigProxyAddress;
        expect(multisigContractAddress.length).toEqual(42);

        const multisig = new MultisigController(multisigContractAddress, signers[0]);
        let fetchedOwners = await multisig.getOwners();
        expect(fetchedOwners.length).toEqual(3);

        let required = await multisig.getRequiredSignatures();
        expect(required.toString()).toEqual("1");

        const isOwner = await multisig.isOwner(owner1);
        expect(isOwner).toEqual(true);


        const encodedData = MultisigController.encodeCall("addOwner", [owner4])
        console.log(encodedData)
        const epa = await multisig.submitTransaction(multisigContractAddress, 0, encodedData, { gasLimit: 7500000})
        const contractReceipt = await epa.wait()
        
        fetchedOwners = await multisig.getOwners()
        expect(fetchedOwners.length).toEqual(4);

        
        // /** ERC721 contract deployment */
        const [erc721Contract, erc721ProxyAddress]: [ERC721BeefLedgerV10, string] = await ERC721Controller.deployERC721Contract(signers[0], multisigContractAddress);
        const erc721ContractAddress = erc721ProxyAddress
        expect(erc721ContractAddress.length).toEqual(42);

        let owner = await erc721Contract.owner();
        expect(owner).toEqual(multisigProxyAddress);

        const erc721Controller = new ERC721Controller(erc721ContractAddress, signers[0]);
        owner = await erc721Controller.getOwner();
        expect(owner).toEqual(multisigProxyAddress);

        //mint
        const mintTokensTx = await erc721Controller.mint(owner3, [1000, 10001, 10002, 10003, 10004]);
        await mintTokensTx.wait();
        
        let mintedTokens = await erc721Controller.balanceOf(owner3);
        expect(mintedTokens.toString()).toEqual("5");

        let ownerOf = await erc721Controller.getOwnerOf(1000);
        expect(ownerOf).toEqual(owner3);

        //upgrade
        const upgradedERC721 = await erc721Controller.upgradeERC721ContractV11(signers[0], erc721ProxyAddress);
        const upgradedErc721Controller = new ERC721Controller(upgradedERC721.address, signers[0]);

        mintedTokens = await upgradedErc721Controller.balanceOf(owner3);
        expect(mintedTokens.toString()).toEqual("5");

        ownerOf = await upgradedErc721Controller.getOwnerOf(1000);
        expect(ownerOf).toEqual(owner3);

        //Create grouping
        
     
    })

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
  
  })
  
      