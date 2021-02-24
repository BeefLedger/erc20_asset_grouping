import { ethers, Signer } from "ethers";

import { CompaniesController } from "../companiesController";
import { CompaniesV10 } from "../types";

let provider: ethers.providers.JsonRpcProvider;
let signers: Signer[] = []

const MINUTE_MS = 60 * 1000

describe("Comnpanies test", () => {
    beforeAll(async () => {
      //Deploy ERC20 and ERC720, mint some and assign them
      provider = new ethers.providers.JsonRpcProvider()
  
      for(let j = 0; j < 10; j++) {
        signers.push(provider.getSigner(j))
      }
  
    }, 1 * MINUTE_MS)
  
    it("Deploys Companies contract, adds a company and adds a company member", async (): Promise<any> => {
        
        const owner1 = await signers[0].getAddress(); 
        const owner2 = await signers[1].getAddress(); 
        const owner3 = await signers[2].getAddress(); 
        const owner4 = await signers[3].getAddress(); 


        /** Companies contract deployment */
        const [companiesContract, companiesProxyAddress]: [CompaniesV10, string] = await CompaniesController.deployCompaniesContract(signers[0], owner1);
        const companiesContractAddress = companiesContract.address;
        expect(companiesContractAddress.length).toEqual(42);

        const companies = new CompaniesController(companiesContractAddress, signers[0]);
        const contractTransaction = await companies.addCompany(owner2, "STD", '0x0000000000000000000000000000000000000000000000000000000000000000');
        await contractTransaction.wait();

        const allCompanies = await companies.getAllCompanies();
        expect(allCompanies.length).toEqual(1);
        expect(allCompanies[0]).toEqual(owner2);
      
    })
  
  })
  
      