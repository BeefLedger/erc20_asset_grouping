import { BigNumber, ethers, Signer } from "ethers";

import { ERC721BeefLedgerV10 } from "../types/ERC721BeefLedgerV10";
import { ERC721Controller } from "../erc721Controller";
import { MultisigController } from "../multisigController";
import { GroupingController } from "../groupingController";
import { ERC721BeefLedgerV11, Grouping, MultisigWalletV10 } from "../types";


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

  it("Deploys MultisigV10 ERC721BeefLedgerV10 and Grouping with token minting, upgrading", async (): Promise<any> => {
      
    const owner1 = await signers[0].getAddress(); 
    const owner2 = await signers[1].getAddress(); 
    const owner3 = await signers[2].getAddress(); 
    const owners = [owner1, owner2, owner3];

    const [multisigContract, multisigProxyAddress]: [MultisigWalletV10, string] = await MultisigController.deployMultisigContract(signers[0], owners, 1);
    const multisigContractAddress = multisigContract.address;
    expect(multisigContractAddress.length).toEqual(42);

    const multisig = new MultisigController(multisigContractAddress, signers[0]);
    const fetchedOwners = await multisig.getOwners();
    expect(fetchedOwners.length).toEqual(3);

    
    const [erc721Contract, erc721ProxyAddress]: [ERC721BeefLedgerV10, string] = await ERC721Controller.deployERC721Contract(signers[0], multisigContractAddress);
    const erc721ContractAddress = erc721Contract.address;
    expect(erc721ContractAddress.length).toEqual(42);

    const erc721 = new ERC721Controller(erc721ContractAddress, signers[0]);
    const contractTransaction  = await erc721.mint(owner1, [1, 2, 3, 4, 5]);
    await contractTransaction.wait();

    let totalTokens = await erc721.getTotalTokens();
    expect(totalTokens.toString()).toEqual("5");

    const upgradedContract: ERC721BeefLedgerV11 = await erc721.upgradeERC721ContractV11(signers[0], erc721ProxyAddress);
    totalTokens = await upgradedContract.getTotalTokens();
    expect(totalTokens.toString()).toEqual("5");

    const rgTokenAddress = "0x3A8E4Cc9deef5c4166f069245F715D15a6dA42ef"
    const groupingContract: Grouping = await GroupingController.deployGroupingContract(signers[0], rgTokenAddress, upgradedContract.address);
    const groupingContractAddress = groupingContract.address;
    expect(groupingContractAddress.length).toEqual(42);

  })

//   it("Deploys ERC20Token", async (): Promise<any> => {
    
//     const [erc20FactoryContract, proxyAddress]: [ERC20FactoryV10, string] = await ERC20FactoryController.deployERC20FactoryContract(signers[0]);
//     const erc20ContractAddress = erc20FactoryContract.address;
//     expect(erc20ContractAddress.length).toEqual(42);

//     const erc20Factory = new ERC20FactoryController(erc20ContractAddress, signers[0])
    
//     const contractTransaction = await erc20Factory.deployERC20Contract(15122, "RG05", "RG05");
//     const contractReceipt = await contractTransaction.wait();

//     await provider.waitForTransaction(contractReceipt.transactionHash);
//     const newERC20Event = contractReceipt.events.filter(evt => evt.event === 'NewERC20')
//     if (newERC20Event) { 
//         if (newERC20Event.length > 0) {
//             if (newERC20Event.length === 1) {
//                 const [erc20Address, owner] = (newERC20Event[0].args as [string, string])
//                 const signerAddress = await signers[0].getAddress()
//                 expect(owner).toEqual(signerAddress);

//                 const allTokens = await erc20Factory.getTokens();
//                 expect(allTokens[0].toLowerCase()).toEqual(erc20Address.toLowerCase())
                
//             } else {
//                 console.log("aca1")
//                 expect(true).toEqual(false)
//             }
//         }
//     } else {
//         console.log("aca2")
//         expect(true).toEqual(false)
//     } 
//   })

//   it("Upgrades ERC20Factory", async (): Promise<any> => {
//     const [erc20FactoryContract, proxyAddress]: [ERC20FactoryV10, string] = await ERC20FactoryController.deployERC20FactoryContract(signers[0]);
//     const erc20ContractAddress = erc20FactoryContract.address;
//     expect(erc20ContractAddress.length).toEqual(42);

//     const erc20Factory = new ERC20FactoryController(erc20ContractAddress, signers[0])
    
//     await erc20Factory.deployERC20Contract(15122, "RG05", "RG05");

//     const upgradedContract: ERC20FactoryV11 = await erc20Factory.upgradeERC20FactoryContractV11(signers[0], proxyAddress);
//     const testvariable = await upgradedContract.functions.getTestVariable();
//     expect(testvariable.toString()).toEqual("745");
    
//     const allTokens = await upgradedContract.getTokens();
//     expect(allTokens.length).toEqual(1)

//   })
})

    