import { ethers } from 'ethers';
import abiDecoder from 'abi-decoder';
import { DecodedCall } from '../abiDecoderController';



export function encode(compilerOutput: any, functionName: string, args?: any[]) {
  const iface = new ethers.utils.Interface(compilerOutput.abi)
  const callData = iface.encodeFunctionData(functionName, args)
  return callData;
}

export function decode(compilerOutput: any, data: string): DecodedCall | null {
  try {
    abiDecoder.addABI(compilerOutput.abi);
    return abiDecoder.decodeMethod(data) as DecodedCall;
  } catch(e) {
    return null
  }
}


