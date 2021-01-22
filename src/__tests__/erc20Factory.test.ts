import { ethers, Signer } from "ethers";

import { ERC20Factory } from "../types/ERC20Factory";
import { ERC20FactoryController } from "../erc20FactoryController";

let provider: ethers.providers.JsonRpcProvider;
let signers: Signer[] = []

const MINUTE_MS = 60 * 1000

describe("Deploy ERC20Factory", () => {
  beforeAll(async () => {
    //Deploy ERC20 and ERC720, mint some and assign them
    provider = new ethers.providers.JsonRpcProvider()

    for(let j = 0; j < 10; j++) {
      signers.push(provider.getSigner(j))
    }

  }, 1 * MINUTE_MS)

  it("Deploys ERC20Factory", async (): Promise<any> => {
    
    const erc20FactoryContract: ERC20Factory = await ERC20FactoryController.deployERC20FactoryContract(signers[0]);
    const erc20ContractAddress = erc20FactoryContract.address;
    expect(erc20ContractAddress.length).toEqual(42);

    const erc20Factory = new ERC20FactoryController(erc20ContractAddress, signers[0])
    const owner: string = await erc20Factory.getOwner();
    const signerAddress = await signers[0].getAddress()
    expect(owner).toEqual(signerAddress);
    
  })
})

    