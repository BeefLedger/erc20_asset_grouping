import * as artifact from "./ethereum/abi/IMultisigCall.json"

import { decode } from './ethereum/encodeCall';

export interface DecodedParams {
    name: string,
    type: string,
    value: any
  }
  
  export interface DecodedCall {
    name: string,
    params: Array<DecodedParams>
  }

export class MultisigAbiDecoder {

    public static decodeCall(data: string): DecodedCall | null {
      return decode(artifact, data)
  }

}


  
  