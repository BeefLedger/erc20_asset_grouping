/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface UpgradeabilityProxyInterface extends ethers.utils.Interface {
  functions: {
    "implementation()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;

  events: {
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export class UpgradeabilityProxy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: UpgradeabilityProxyInterface;

  functions: {
    /**
     * Tells the address of the current implementation return address of the current implementation
     */
    implementation(
      overrides?: CallOverrides
    ): Promise<[string] & { impl: string }>;

    /**
     * Tells the address of the current implementation return address of the current implementation
     */
    "implementation()"(
      overrides?: CallOverrides
    ): Promise<[string] & { impl: string }>;
  };

  /**
   * Tells the address of the current implementation return address of the current implementation
   */
  implementation(overrides?: CallOverrides): Promise<string>;

  /**
   * Tells the address of the current implementation return address of the current implementation
   */
  "implementation()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    /**
     * Tells the address of the current implementation return address of the current implementation
     */
    implementation(overrides?: CallOverrides): Promise<string>;

    /**
     * Tells the address of the current implementation return address of the current implementation
     */
    "implementation()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Upgraded(implementation: string | null): EventFilter;
  };

  estimateGas: {
    /**
     * Tells the address of the current implementation return address of the current implementation
     */
    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Tells the address of the current implementation return address of the current implementation
     */
    "implementation()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Tells the address of the current implementation return address of the current implementation
     */
    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Tells the address of the current implementation return address of the current implementation
     */
    "implementation()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
