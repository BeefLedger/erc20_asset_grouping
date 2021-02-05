import abi from 'ethereumjs-abi';
import { ethers } from 'ethers';

export function encode(compilerOutput: any, functionName: string, args?: any[]) {
  const iface = new ethers.utils.Interface(compilerOutput.abi)
  const callData = iface.encodeFunctionData(functionName, args)
  return callData;
}
