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
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ERC20FactoryV11Interface extends ethers.utils.Interface {
  functions: {
    "deploy(uint256,string,string)": FunctionFragment;
    "getTokens()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "testVariable()": FunctionFragment;
    "tokens(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "initializeV11(uint256)": FunctionFragment;
    "getTestVariable()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deploy",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "getTokens", values?: undefined): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "testVariable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeV11",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTestVariable",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testVariable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeV11",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTestVariable",
    data: BytesLike
  ): Result;

  events: {
    "NewERC20(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewERC20"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class ERC20FactoryV11 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ERC20FactoryV11Interface;

  functions: {
    deploy(
      _chainId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deploy(uint256,string,string)"(
      _chainId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getTokens(overrides?: CallOverrides): Promise<[string[]]>;

    "getTokens()"(overrides?: CallOverrides): Promise<[string[]]>;

    initialize(
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    testVariable(overrides?: CallOverrides): Promise<[BigNumber]>;

    "testVariable()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "tokens(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initializeV11(
      _testVariable: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initializeV11(uint256)"(
      _testVariable: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getTestVariable(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getTestVariable()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  deploy(
    _chainId: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deploy(uint256,string,string)"(
    _chainId: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getTokens(overrides?: CallOverrides): Promise<string[]>;

  "getTokens()"(overrides?: CallOverrides): Promise<string[]>;

  initialize(
    _owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    _owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Tells the address of the owner return the address of the owner
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Tells the address of the owner return the address of the owner
   */
  "owner()"(overrides?: CallOverrides): Promise<string>;

  testVariable(overrides?: CallOverrides): Promise<BigNumber>;

  "testVariable()"(overrides?: CallOverrides): Promise<BigNumber>;

  tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "tokens(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initializeV11(
    _testVariable: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initializeV11(uint256)"(
    _testVariable: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getTestVariable(overrides?: CallOverrides): Promise<BigNumber>;

  "getTestVariable()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    deploy(
      _chainId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "deploy(uint256,string,string)"(
      _chainId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getTokens(overrides?: CallOverrides): Promise<string[]>;

    "getTokens()"(overrides?: CallOverrides): Promise<string[]>;

    initialize(_owner: string, overrides?: CallOverrides): Promise<void>;

    "initialize(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    "owner()"(overrides?: CallOverrides): Promise<string>;

    testVariable(overrides?: CallOverrides): Promise<BigNumber>;

    "testVariable()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "tokens(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeV11(
      _testVariable: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initializeV11(uint256)"(
      _testVariable: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getTestVariable(overrides?: CallOverrides): Promise<BigNumber>;

    "getTestVariable()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    NewERC20(tokenAddress: string | null, owner: string | null): EventFilter;

    OwnershipTransferred(previousOwner: null, newOwner: null): EventFilter;
  };

  estimateGas: {
    deploy(
      _chainId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deploy(uint256,string,string)"(
      _chainId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getTokens(overrides?: CallOverrides): Promise<BigNumber>;

    "getTokens()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_owner: string, overrides?: Overrides): Promise<BigNumber>;

    "initialize(address)"(
      _owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    testVariable(overrides?: CallOverrides): Promise<BigNumber>;

    "testVariable()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "tokens(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    initializeV11(
      _testVariable: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initializeV11(uint256)"(
      _testVariable: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getTestVariable(overrides?: CallOverrides): Promise<BigNumber>;

    "getTestVariable()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    deploy(
      _chainId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deploy(uint256,string,string)"(
      _chainId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTokens()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    testVariable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "testVariable()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokens(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initializeV11(
      _testVariable: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initializeV11(uint256)"(
      _testVariable: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getTestVariable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTestVariable()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
