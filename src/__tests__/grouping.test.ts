import { BigNumber, ethers, Signer } from "ethers";

import { ERC721BeefLedgerV10 } from "../types/ERC721BeefLedgerV10";
import { ERC721Controller } from "../erc721Controller";
import { MultisigController } from "../multisigController";
import { GroupingController } from "../groupingController";
import { ERC721BeefLedgerV11, Grouping, MultisigWalletV10 } from "../types";
import { upgradeERC721 } from "../ethereum/deploy/deploy";


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


    /** Multisig contract deployment */
    const [multisigContract, multisigProxyAddress]: [MultisigWalletV10, string] = await MultisigController.deployMultisigContract(signers[0], owners, 1);
    const multisigContractAddress = multisigContract.address;
    expect(multisigContractAddress.length).toEqual(42);

    const multisig = new MultisigController(multisigContractAddress, signers[0]);
    const fetchedOwners = await multisig.getOwners();
    expect(fetchedOwners.length).toEqual(3);
    ///////////////////////////////////////////////////



    /** ERC721 contract deployment */
    const [erc721Contract, erc721ProxyAddress]: [ERC721BeefLedgerV10, string] = await ERC721Controller.deployERC721Contract(signers[0], multisigContractAddress);
    const erc721ContractAddress = erc721Contract.address;
    expect(erc721ContractAddress.length).toEqual(42);
    //mints tokens
    const assets = [1, 2, 3, 4, 5]
    const erc721 = new ERC721Controller(erc721ContractAddress, signers[0]);
    const contractTransaction  = await erc721.mint(owner1, assets);
    await contractTransaction.wait();
    let totalTokens = await erc721.getTotalTokens();
    expect(totalTokens.toString()).toEqual("5");
    ///////////////////////////////////////////////////



    /** ERC721 contract upgrade */
    const upgradedERC721: ERC721BeefLedgerV11 = await erc721.upgradeERC721ContractV11(signers[0], erc721ProxyAddress);
    totalTokens = await upgradedERC721.getTotalTokens();
    expect(totalTokens.toString()).toEqual("5");
    ///////////////////////////////////////////////////



    /** Grouping contract deployment */
    const rgTokenAddress = "0x3A8E4Cc9deef5c4166f069245F715D15a6dA42ef"
    const groupingContract: Grouping = await GroupingController.deployGroupingContract(signers[0], rgTokenAddress, upgradedERC721.address);
    const groupingContractAddress = groupingContract.address;
    expect(groupingContractAddress.length).toEqual(42);
    ///////////////////////////////////////////////////


    //Adds assets to grouping by calling addAssetsToGrouping from ERC721V11
    (await upgradedERC721.functions.addAssetsToGrouping(assets, groupingContractAddress)).wait();
    const groupingAddress = await upgradedERC721.getGroupingAddress(1);
    expect(groupingAddress).toEqual(groupingContractAddress);
    const getAssets = await groupingContract.getAssets();
    expect(getAssets.length).toEqual(assets.length);
  })

})

    