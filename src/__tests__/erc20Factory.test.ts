import { ethers, Signer } from "ethers";

import { ERC20FactoryV10 } from "../types/ERC20FactoryV10";
import { ERC20FactoryV11 } from "../types/ERC20FactoryV11";
import { ERC20FactoryController } from "../erc20FactoryController";

let provider: ethers.providers.JsonRpcProvider;
let signers: Signer[] = []

const MINUTE_MS = 60 * 1000

describe("Deploy ERC20FactoryV10", () => {
  beforeAll(async () => {
    //Deploy ERC20 and ERC720, mint some and assign them
    provider = new ethers.providers.JsonRpcProvider()

    for(let j = 0; j < 10; j++) {
      signers.push(provider.getSigner(j))
    }

  }, 1 * MINUTE_MS)

  // it("Deploys ERC20Factory", async (): Promise<any> => {
    
  //   const [erc20FactoryContract, proxyAddress]: [ERC20FactoryV10, string] = await ERC20FactoryController.deployERC20FactoryContract(signers[0]);
  //   const erc20ContractAddress = erc20FactoryContract.address;
  //   expect(erc20ContractAddress.length).toEqual(42);

  //   const erc20Factory = new ERC20FactoryController(erc20ContractAddress, signers[0])
  //   const owner: string = await erc20Factory.getOwner();

  //   const signerAddress = await signers[0].getAddress();

  //   expect(owner).toEqual(signerAddress);
    
  // })

  // it("Deploys ERC20Token", async (): Promise<any> => {
    
  //   const [erc20FactoryContract, proxyAddress]: [ERC20FactoryV10, string] = await ERC20FactoryController.deployERC20FactoryContract(signers[0]);
  //   const erc20ContractAddress = erc20FactoryContract.address;
  //   expect(erc20ContractAddress.length).toEqual(42);

  //   const erc20Factory = new ERC20FactoryController(erc20ContractAddress, signers[0])
    
  //   const contractTransaction = await erc20Factory.deployERC20Contract(15122, "RG05", "RG05");
  //   const contractReceipt = await contractTransaction.wait();

  //   await provider.waitForTransaction(contractReceipt.transactionHash);
  //   const newERC20Event = contractReceipt.events.filter(evt => evt.event === 'NewERC20')
  //   if (newERC20Event) { 
  //       if (newERC20Event.length > 0) {
  //           if (newERC20Event.length === 1) {
  //               const [erc20Address, owner] = (newERC20Event[0].args as [string, string])
  //               const signerAddress = await signers[0].getAddress()
  //               expect(owner).toEqual(signerAddress);

  //               const allTokens = await erc20Factory.getTokens();
  //               expect(allTokens[0].toLowerCase()).toEqual(erc20Address.toLowerCase())
                
  //           } else {
  //               console.log("aca1")
  //               expect(true).toEqual(false)
  //           }
  //       }
  //   } else {
  //       console.log("aca2")
  //       expect(true).toEqual(false)
  //   } 
  // })

  it("Upgrades ERC20Factory", async (): Promise<any> => {
    const [erc20FactoryContract, proxyAddress]: [ERC20FactoryV10, string] = await ERC20FactoryController.deployERC20FactoryContract(signers[0]);
    const erc20ContractAddress = erc20FactoryContract.address;
    expect(erc20ContractAddress.length).toEqual(42);

    const erc20Factory = new ERC20FactoryController(erc20ContractAddress, signers[0])
    
    await erc20Factory.deployERC20Contract(15122, "RG05", "RG05");

    console.log(proxyAddress)

    const upgradedContract = await erc20Factory.upgradeERC20FactoryContractV11(signers[0], proxyAddress);
    const testvariable = await upgradedContract.functions.getTestVariable();
    console.log(testvariable)
    //const testVariable = await 
  })
})

    