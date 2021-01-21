import { getProvider } from "./providerFactory";

export async function getSigner(addressOrIndex?: string | number) {
    return (getProvider()).getSigner(addressOrIndex)
}

