import { ethers, Signer } from "ethers";
import { JsonRpcProvider } from "ethers/providers";

import { deployERC20Factory } from '../ethereum/deploy/deploy'
import { Erc20Factory } from "../types/Erc20Factory";

let provider: JsonRpcProvider;
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
    
    const erc20FactoryContract: Erc20Factory = await deployERC20Factory(signers[0]);
    console.log(erc20FactoryContract.address)
    
  })
})

    