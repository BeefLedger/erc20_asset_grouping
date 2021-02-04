import { BytesLike, Contract, ContractFactory, Signer } from "ethers";
import { getProvider } from "./providerFactory";
import { getSigner } from "./signerFactory";
import * as artifactOwnedUpgradeabilityProxy from "../ethereum/abi/OwnedUpgradeabilityProxy.json"
import { OwnedUpgradeabilityProxy } from "../types/OwnedUpgradeabilityProxy";

export async function deployContract <T extends Contract>(
    signer: Signer,
    compilerOutput: any,
    ...args: any[]
): Promise<T> {
    try {
        const contractFactory = ContractFactory.fromSolidity(compilerOutput, signer);
        const contract: T = (await contractFactory.deploy(...args)) as T;
        return (await contract.deployed()) as T;
    }
    catch (e) {
        throw Error(`deployContract(): ${e}`)
    }
};

export async function initializeContract <T extends Contract> (
        signer: Signer,
        compilerOutput: any,
        args?: string[] | [],
        vals?: string[] | []
    ): Promise<T> {
        if(args && vals && args.length !== vals.length) {
            throw Error(`initializeContract(): args lenght has to be the same as vals lenght`)
        }
        try {
            const proxiedContract: T = await  deployContract(signer, compilerOutput);
            const proxy: OwnedUpgradeabilityProxy = await deployContract(signer, artifactOwnedUpgradeabilityProxy);
            const initializeData: BytesLike = encodeCall('initialize', args, vals)
            await proxy.functions.upgradeToAndCall(proxiedContract.address, initializeData);
            return proxiedContract.at(proxy.address);
        }
        catch (e) {
            throw Error(`initializeContract(): ${e}`)
        }
}

export async function upgradeContract<T extends Contract> (
        signer: Signer,
        compilerOutput: any,
        proxyAddress: string
    ): Promise<T> {
        try {
            const proxiedContract: T = await  deployContract(signer, compilerOutput);
            const proxy: OwnedUpgradeabilityProxy = new OwnedUpgradeabilityProxy(proxyAddress, artifactOwnedUpgradeabilityProxy.abi, signer);
            await proxy.upgradeTo(proxiedContract.address);
            return proxiedContract.at(proxy.address);
        } catch(e) {
            throw Error(`upgradeContract(): ${e}`)
        }
    }
)

export async function getContract <T extends Contract>(
    address: string,
    abi: any,
    addressOrIndexOrSigner?: string | number | Signer,
): Promise<T> {
    let signer: Signer
    if (addressOrIndexOrSigner !== undefined) {
        if (!["string", "number"].includes(typeof(addressOrIndexOrSigner))) {
            signer = addressOrIndexOrSigner as unknown as Signer
        } else if (signer instanceof Signer) {
            signer = await getSigner(addressOrIndexOrSigner as string | number)
        }
        return new Contract(address, abi, signer) as T
    } else {
        const provider = getProvider();
        return new Contract(address, abi, provider) as T
    }
}

