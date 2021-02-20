import { BigNumber, ethers, Signer } from "ethers";
import { getMultisigContract } from "../chain/prefabContractFactory";

import { MultisigController } from "../multisigController";
import { MultisigWalletV10 } from "../types";

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
  
    it("Deploys MultisigV10 ERC721BeefLedgerV10 and adds owner", async (): Promise<any> => {
        
        const owner1 = await signers[0].getAddress(); 
        const owner2 = await signers[1].getAddress(); 
        const owner3 = await signers[2].getAddress(); 
        const owner4 = await signers[3].getAddress(); 
        const owners = [owner1, owner2, owner3];


        /** Multisig contract deployment */
        const [multisigContract, multisigProxyAddress]: [MultisigWalletV10, string] = await MultisigController.deployMultisigContract(signers[0], owners, 1);
        const multisigContractAddress = multisigContract.address;
        expect(multisigContractAddress.length).toEqual(42);

        const multisig = new MultisigController(multisigContractAddress, signers[0]);
        let fetchedOwners = await multisig.getOwners();
        expect(fetchedOwners.length).toEqual(3);

        let required = await multisig.getRequiredSignatures();
        expect(required.toString()).toEqual("1");

        const mSigContract = await getMultisigContract(multisigContractAddress, signers[0]);
        fetchedOwners = await mSigContract.getOwners()
        expect(fetchedOwners.length).toEqual(3);

        // let encodedData = multisig.encodeCall("removeOwner", [owner2])
        // let epa = await mSigContract.functions.submitTransaction(multisigContractAddress, 0, encodedData)
        // let contractReceipt = await epa.wait()


        // let events = contractReceipt.events.map(evt => evt.event)
        // fetchedOwners = await mSigContract.getOwners()
        // console.log(fetchedOwners)
        // console.log(events)


        const encodedData = multisig.encodeCall("replaceOwner", [owner2, owner4])
        const epa = await mSigContract.functions.submitTransaction(multisigContractAddress, 0, encodedData, { gasLimit: 6200000})
        const contractReceipt = await epa.wait()
        const events = contractReceipt.events.map(evt => evt.event)
        fetchedOwners = await mSigContract.getOwners()
        console.log(fetchedOwners)
        console.log(events)

        
      ///////////////////////////////////////////////////
        // const encodedData = multisig.encodeCall("removeOwner", [owner2])
        // console.log(encodedData)
        // const contractTransaction = await multisig.submitTransaction(multisigContractAddress, 0, encodedData);
        // const contractReceipt = await contractTransaction.wait();
        // console.log(contractReceipt.events)
        // fetchedOwners = await multisig.getOwners();
        // expect(fetchedOwners.length).toEqual(2);
      
    })

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
  
  })
  
      