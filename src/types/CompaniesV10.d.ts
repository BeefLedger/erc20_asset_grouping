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

interface CompaniesV10Interface extends ethers.utils.Interface {
  functions: {
    "companies(uint256)": FunctionFragment;
    "companyByName(bytes20)": FunctionFragment;
    "companyData(address)": FunctionFragment;
    "isCompany(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "signatorie(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "addCompany(address,string,bytes32)": FunctionFragment;
    "removeCompany(address)": FunctionFragment;
    "addSignatorie(address)": FunctionFragment;
    "removeSignatorie(address)": FunctionFragment;
    "setCompanyData(string,bytes32)": FunctionFragment;
    "getAllCompanies()": FunctionFragment;
    "isAddressCompany(address)": FunctionFragment;
    "getCompanyBySignatorie(address)": FunctionFragment;
    "getCompanyByAddress(address)": FunctionFragment;
    "getCompanyByName(string)": FunctionFragment;
    "isSignatorieAuthorized(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "companies",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "companyByName",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "companyData", values: [string]): string;
  encodeFunctionData(functionFragment: "isCompany", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "signatorie", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addCompany",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeCompany",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addSignatorie",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeSignatorie",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCompanyData",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllCompanies",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAddressCompany",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCompanyBySignatorie",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCompanyByAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCompanyByName",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isSignatorieAuthorized",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "companies", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "companyByName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "companyData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isCompany", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "signatorie", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addCompany", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeCompany",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addSignatorie",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeSignatorie",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCompanyData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllCompanies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAddressCompany",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCompanyBySignatorie",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCompanyByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCompanyByName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSignatorieAuthorized",
    data: BytesLike
  ): Result;

  events: {
    "ChangeCompanyIPFS(bytes32,bytes32)": EventFragment;
    "ChangeCompanyName(string,string)": EventFragment;
    "NewCompany(address,string)": EventFragment;
    "NewSignatorie(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RemoveCompany(address)": EventFragment;
    "RemoveSignatorie(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangeCompanyIPFS"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangeCompanyName"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewCompany"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewSignatorie"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveCompany"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveSignatorie"): EventFragment;
}

export class CompaniesV10 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CompaniesV10Interface;

  functions: {
    companies(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "companies(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    companyByName(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "companyByName(bytes20)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    companyData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string] & {
        createdAt: BigNumber;
        name: string;
        ipfsLink: string;
      }
    >;

    "companyData(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string] & {
        createdAt: BigNumber;
        name: string;
        ipfsLink: string;
      }
    >;

    isCompany(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isCompany(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    signatorie(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    "signatorie(address)"(
      arg0: string,
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

    initialize(
      _multisigWallet: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      _multisigWallet: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addCompany(
      _company: string,
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addCompany(address,string,bytes32)"(
      _company: string,
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeCompany(
      _company: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeCompany(address)"(
      _company: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addSignatorie(
      _signatorie: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addSignatorie(address)"(
      _signatorie: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeSignatorie(
      _signatorie: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeSignatorie(address)"(
      _signatorie: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setCompanyData(
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCompanyData(string,bytes32)"(
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Getters
     */
    getAllCompanies(overrides?: CallOverrides): Promise<[string[]]>;

    /**
     * Getters
     */
    "getAllCompanies()"(overrides?: CallOverrides): Promise<[string[]]>;

    isAddressCompany(
      _company: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isAddressCompany(address)"(
      _company: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getCompanyBySignatorie(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getCompanyBySignatorie(address)"(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getCompanyByAddress(
      _company: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string[], string, string, boolean]>;

    "getCompanyByAddress(address)"(
      _company: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string[], string, string, boolean]>;

    getCompanyByName(
      _stringName: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string[], string, string, boolean]>;

    "getCompanyByName(string)"(
      _stringName: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string[], string, string, boolean]>;

    isSignatorieAuthorized(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isSignatorieAuthorized(address)"(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  companies(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "companies(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  companyByName(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "companyByName(bytes20)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  companyData(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string] & {
      createdAt: BigNumber;
      name: string;
      ipfsLink: string;
    }
  >;

  "companyData(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string] & {
      createdAt: BigNumber;
      name: string;
      ipfsLink: string;
    }
  >;

  isCompany(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "isCompany(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Tells the address of the owner return the address of the owner
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Tells the address of the owner return the address of the owner
   */
  "owner()"(overrides?: CallOverrides): Promise<string>;

  signatorie(arg0: string, overrides?: CallOverrides): Promise<string>;

  "signatorie(address)"(
    arg0: string,
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

  initialize(
    _multisigWallet: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    _multisigWallet: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addCompany(
    _company: string,
    _name: string,
    _ipfsLink: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addCompany(address,string,bytes32)"(
    _company: string,
    _name: string,
    _ipfsLink: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeCompany(
    _company: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeCompany(address)"(
    _company: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addSignatorie(
    _signatorie: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addSignatorie(address)"(
    _signatorie: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeSignatorie(
    _signatorie: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeSignatorie(address)"(
    _signatorie: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setCompanyData(
    _name: string,
    _ipfsLink: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCompanyData(string,bytes32)"(
    _name: string,
    _ipfsLink: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Getters
   */
  getAllCompanies(overrides?: CallOverrides): Promise<string[]>;

  /**
   * Getters
   */
  "getAllCompanies()"(overrides?: CallOverrides): Promise<string[]>;

  isAddressCompany(
    _company: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isAddressCompany(address)"(
    _company: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getCompanyBySignatorie(
    _signatorie: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getCompanyBySignatorie(address)"(
    _signatorie: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getCompanyByAddress(
    _company: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string[], string, string, boolean]>;

  "getCompanyByAddress(address)"(
    _company: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string[], string, string, boolean]>;

  getCompanyByName(
    _stringName: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string[], string, string, boolean]>;

  "getCompanyByName(string)"(
    _stringName: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string[], string, string, boolean]>;

  isSignatorieAuthorized(
    _signatorie: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isSignatorieAuthorized(address)"(
    _signatorie: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    companies(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "companies(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    companyByName(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "companyByName(bytes20)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    companyData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string] & {
        createdAt: BigNumber;
        name: string;
        ipfsLink: string;
      }
    >;

    "companyData(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string] & {
        createdAt: BigNumber;
        name: string;
        ipfsLink: string;
      }
    >;

    isCompany(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "isCompany(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    "owner()"(overrides?: CallOverrides): Promise<string>;

    signatorie(arg0: string, overrides?: CallOverrides): Promise<string>;

    "signatorie(address)"(
      arg0: string,
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

    initialize(
      _multisigWallet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address)"(
      _multisigWallet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addCompany(
      _company: string,
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "addCompany(address,string,bytes32)"(
      _company: string,
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    removeCompany(_company: string, overrides?: CallOverrides): Promise<void>;

    "removeCompany(address)"(
      _company: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addSignatorie(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addSignatorie(address)"(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeSignatorie(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeSignatorie(address)"(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setCompanyData(
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCompanyData(string,bytes32)"(
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Getters
     */
    getAllCompanies(overrides?: CallOverrides): Promise<string[]>;

    /**
     * Getters
     */
    "getAllCompanies()"(overrides?: CallOverrides): Promise<string[]>;

    isAddressCompany(
      _company: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isAddressCompany(address)"(
      _company: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getCompanyBySignatorie(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getCompanyBySignatorie(address)"(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getCompanyByAddress(
      _company: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string[], string, string, boolean]>;

    "getCompanyByAddress(address)"(
      _company: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string[], string, string, boolean]>;

    getCompanyByName(
      _stringName: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string[], string, string, boolean]>;

    "getCompanyByName(string)"(
      _stringName: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string[], string, string, boolean]>;

    isSignatorieAuthorized(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isSignatorieAuthorized(address)"(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    ChangeCompanyIPFS(lastIPFS: null, newIPFS: null): EventFilter;

    ChangeCompanyName(lastName: null, newName: null): EventFilter;

    NewCompany(company: string | null, name: null): EventFilter;

    NewSignatorie(company: string | null, signatorie: null): EventFilter;

    OwnershipTransferred(previousOwner: null, newOwner: null): EventFilter;

    RemoveCompany(company: string | null): EventFilter;

    RemoveSignatorie(company: string | null, signatorie: null): EventFilter;
  };

  estimateGas: {
    companies(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "companies(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    companyByName(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "companyByName(bytes20)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    companyData(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "companyData(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCompany(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isCompany(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    signatorie(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "signatorie(address)"(
      arg0: string,
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

    initialize(
      _multisigWallet: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address)"(
      _multisigWallet: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addCompany(
      _company: string,
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addCompany(address,string,bytes32)"(
      _company: string,
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    removeCompany(_company: string, overrides?: Overrides): Promise<BigNumber>;

    "removeCompany(address)"(
      _company: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addSignatorie(
      _signatorie: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addSignatorie(address)"(
      _signatorie: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    removeSignatorie(
      _signatorie: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeSignatorie(address)"(
      _signatorie: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setCompanyData(
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setCompanyData(string,bytes32)"(
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Getters
     */
    getAllCompanies(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Getters
     */
    "getAllCompanies()"(overrides?: CallOverrides): Promise<BigNumber>;

    isAddressCompany(
      _company: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAddressCompany(address)"(
      _company: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCompanyBySignatorie(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCompanyBySignatorie(address)"(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCompanyByAddress(
      _company: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCompanyByAddress(address)"(
      _company: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCompanyByName(
      _stringName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCompanyByName(string)"(
      _stringName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSignatorieAuthorized(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isSignatorieAuthorized(address)"(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    companies(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "companies(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    companyByName(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "companyByName(bytes20)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    companyData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "companyData(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCompany(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isCompany(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Tells the address of the owner return the address of the owner
     */
    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    signatorie(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "signatorie(address)"(
      arg0: string,
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

    initialize(
      _multisigWallet: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      _multisigWallet: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addCompany(
      _company: string,
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addCompany(address,string,bytes32)"(
      _company: string,
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removeCompany(
      _company: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeCompany(address)"(
      _company: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addSignatorie(
      _signatorie: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addSignatorie(address)"(
      _signatorie: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removeSignatorie(
      _signatorie: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeSignatorie(address)"(
      _signatorie: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setCompanyData(
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCompanyData(string,bytes32)"(
      _name: string,
      _ipfsLink: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Getters
     */
    getAllCompanies(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Getters
     */
    "getAllCompanies()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAddressCompany(
      _company: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAddressCompany(address)"(
      _company: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCompanyBySignatorie(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCompanyBySignatorie(address)"(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCompanyByAddress(
      _company: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCompanyByAddress(address)"(
      _company: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCompanyByName(
      _stringName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCompanyByName(string)"(
      _stringName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSignatorieAuthorized(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isSignatorieAuthorized(address)"(
      _signatorie: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}