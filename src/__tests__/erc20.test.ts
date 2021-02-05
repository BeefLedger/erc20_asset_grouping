import { ethers, Signer } from "ethers";

// import { ERC20Factory } from "../types/ERC20Factory";
// import { ERC20ForAssetGrouping } from "../types/ERC20ForAssetGrouping";
// import { ERC20FactoryController } from "../erc20FactoryController";
// import { ERC20Controller } from "../erc20Controller";

let provider: ethers.providers.JsonRpcProvider;
let signers: Signer[] = []

const MINUTE_MS = 60 * 1000

describe("Deploy ERC20", () => {
  beforeAll(async () => {
    //Deploy ERC20 and ERC720, mint some and assign them
    provider = new ethers.providers.JsonRpcProvider()

    for(let j = 0; j < 10; j++) {
      signers.push(provider.getSigner(j))
    }

  }, 1 * MINUTE_MS)

  it("Deploys ERC20Factory and ERC20", async (): Promise<any> => {
    
    // const erc20FactoryContract: ERC20Factory = await ERC20FactoryController.deployERC20FactoryContract(signers[0]);
    // const erc20FactoryAddress = erc20FactoryContract.address;
    // expect(erc20FactoryAddress.length).toEqual(42);

    // const erc20Factory = new ERC20FactoryController(erc20FactoryAddress, signers[0]);
    // const erc20Contract: ERC20ForAssetGrouping = await erc20Factory.deployERC20Contract(18122, "RG05", "RG05");

    // const deployedContract = new ERC20Controller(erc20Contract.address, signers[0]);

    // const balance = await deployedContract.balanceOf();

    // console.log(balance)

    // const owner: string = await erc20Contract.getOwner();

    // console.log(owner)
    //expect(owner).toEqual(erc20FactoryAddress);
    
  })
})

    