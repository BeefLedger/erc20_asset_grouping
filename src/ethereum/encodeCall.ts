import { ethers } from 'ethers';
import abiDecoder from 'abi-decoder';

export function encode(compilerOutput: any, functionName: string, args?: any[]) {
  const iface = new ethers.utils.Interface(compilerOutput.abi)
  const callData = iface.encodeFunctionData(functionName, args)
  return callData;
}

export function decode(compilerOutput: any, data: string) {
  abiDecoder.addABI(compilerOutput.abi);
  return abiDecoder.decodeMethod(data);
}
