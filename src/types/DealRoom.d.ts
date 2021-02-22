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

interface DealRoomInterface extends ethers.utils.Interface {
  functions: {
    "buyer()": FunctionFragment;
    "creator()": FunctionFragment;
    "dealCount()": FunctionFragment;
    "deals(uint256)": FunctionFragment;
    "erc20()": FunctionFragment;
    "erc721()": FunctionFragment;
    "owner()": FunctionFragment;
    "seller()": FunctionFragment;
    "makeDeal(address,address,uint256,uint256[])": FunctionFragment;
    "missingDealAssets(uint256)": FunctionFragment;
    "missingDealCoins(uint256)": FunctionFragment;
    "settle(uint256)": FunctionFragment;
    "withdrawDealAssets(uint256,uint256)": FunctionFragment;
    "withdrawDealCoins(uint256)": FunctionFragment;
    "getOwner()": FunctionFragment;
    "getBuyer()": FunctionFragment;
    "getSeller()": FunctionFragment;
    "changeOwner(address)": FunctionFragment;
    "getDeal(uint256)": FunctionFragment;
    "getDealCount()": FunctionFragment;
    "getDealStatus(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "buyer", values?: undefined): string;
  encodeFunctionData(functionFragment: "creator", values?: undefined): string;
  encodeFunctionData(functionFragment: "dealCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "deals", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "erc20", values?: undefined): string;
  encodeFunctionData(functionFragment: "erc721", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "seller", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "makeDeal",
    values: [string, string, BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "missingDealAssets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "missingDealCoins",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "settle",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawDealAssets",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawDealCoins",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "getBuyer", values?: undefined): string;
  encodeFunctionData(functionFragment: "getSeller", values?: undefined): string;
  encodeFunctionData(functionFragment: "changeOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getDeal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDealCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDealStatus",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "buyer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "creator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dealCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "erc20", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "erc721", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "seller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeDeal", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "missingDealAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "missingDealCoins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawDealAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawDealCoins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBuyer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSeller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDeal", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDealCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDealStatus",
    data: BytesLike
  ): Result;

  events: {
    "Debug(bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Debug"): EventFragment;
}

export class DealRoom extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DealRoomInterface;

  functions: {
    buyer(overrides?: CallOverrides): Promise<[string]>;

    "buyer()"(overrides?: CallOverrides): Promise<[string]>;

    creator(overrides?: CallOverrides): Promise<[string]>;

    "creator()"(overrides?: CallOverrides): Promise<[string]>;

    dealCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "dealCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    deals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber, number, boolean] & {
        id: BigNumber;
        erc20: string;
        erc721: string;
        price: BigNumber;
        status: number;
        valid: boolean;
      }
    >;

    "deals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber, number, boolean] & {
        id: BigNumber;
        erc20: string;
        erc721: string;
        price: BigNumber;
        status: number;
        valid: boolean;
      }
    >;

    erc20(overrides?: CallOverrides): Promise<[string]>;

    "erc20()"(overrides?: CallOverrides): Promise<[string]>;

    erc721(overrides?: CallOverrides): Promise<[string]>;

    "erc721()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    seller(overrides?: CallOverrides): Promise<[string]>;

    "seller()"(overrides?: CallOverrides): Promise<[string]>;

    makeDeal(
      _erc20: string,
      _erc721: string,
      _price: BigNumberish,
      _assetItems: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "makeDeal(address,address,uint256,uint256[])"(
      _erc20: string,
      _erc721: string,
      _price: BigNumberish,
      _assetItems: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    missingDealAssets(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "missingDealAssets(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    missingDealCoins(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "missingDealCoins(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    settle(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "settle(uint256)"(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawDealAssets(
      dealId: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawDealAssets(uint256,uint256)"(
      dealId: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawDealCoins(
      dealId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawDealCoins(uint256)"(
      dealId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    "getOwner()"(overrides?: CallOverrides): Promise<[string]>;

    getBuyer(overrides?: CallOverrides): Promise<[string]>;

    "getBuyer()"(overrides?: CallOverrides): Promise<[string]>;

    getSeller(overrides?: CallOverrides): Promise<[string]>;

    "getSeller()"(overrides?: CallOverrides): Promise<[string]>;

    changeOwner(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changeOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getDeal(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, string, string, BigNumber, BigNumber[], number, boolean] & {
          id: BigNumber;
          erc20: string;
          erc721: string;
          price: BigNumber;
          assetItems: BigNumber[];
          status: number;
          valid: boolean;
        }
      ]
    >;

    "getDeal(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, string, string, BigNumber, BigNumber[], number, boolean] & {
          id: BigNumber;
          erc20: string;
          erc721: string;
          price: BigNumber;
          assetItems: BigNumber[];
          status: number;
          valid: boolean;
        }
      ]
    >;

    getDealCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getDealCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getDealStatus(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "getDealStatus(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;
  };

  buyer(overrides?: CallOverrides): Promise<string>;

  "buyer()"(overrides?: CallOverrides): Promise<string>;

  creator(overrides?: CallOverrides): Promise<string>;

  "creator()"(overrides?: CallOverrides): Promise<string>;

  dealCount(overrides?: CallOverrides): Promise<BigNumber>;

  "dealCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  deals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, BigNumber, number, boolean] & {
      id: BigNumber;
      erc20: string;
      erc721: string;
      price: BigNumber;
      status: number;
      valid: boolean;
    }
  >;

  "deals(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, BigNumber, number, boolean] & {
      id: BigNumber;
      erc20: string;
      erc721: string;
      price: BigNumber;
      status: number;
      valid: boolean;
    }
  >;

  erc20(overrides?: CallOverrides): Promise<string>;

  "erc20()"(overrides?: CallOverrides): Promise<string>;

  erc721(overrides?: CallOverrides): Promise<string>;

  "erc721()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  seller(overrides?: CallOverrides): Promise<string>;

  "seller()"(overrides?: CallOverrides): Promise<string>;

  makeDeal(
    _erc20: string,
    _erc721: string,
    _price: BigNumberish,
    _assetItems: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "makeDeal(address,address,uint256,uint256[])"(
    _erc20: string,
    _erc721: string,
    _price: BigNumberish,
    _assetItems: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  missingDealAssets(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "missingDealAssets(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  missingDealCoins(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "missingDealCoins(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  settle(id: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "settle(uint256)"(
    id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawDealAssets(
    dealId: BigNumberish,
    count: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawDealAssets(uint256,uint256)"(
    dealId: BigNumberish,
    count: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawDealCoins(
    dealId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawDealCoins(uint256)"(
    dealId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  "getOwner()"(overrides?: CallOverrides): Promise<string>;

  getBuyer(overrides?: CallOverrides): Promise<string>;

  "getBuyer()"(overrides?: CallOverrides): Promise<string>;

  getSeller(overrides?: CallOverrides): Promise<string>;

  "getSeller()"(overrides?: CallOverrides): Promise<string>;

  changeOwner(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changeOwner(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getDeal(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, BigNumber, BigNumber[], number, boolean] & {
      id: BigNumber;
      erc20: string;
      erc721: string;
      price: BigNumber;
      assetItems: BigNumber[];
      status: number;
      valid: boolean;
    }
  >;

  "getDeal(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, BigNumber, BigNumber[], number, boolean] & {
      id: BigNumber;
      erc20: string;
      erc721: string;
      price: BigNumber;
      assetItems: BigNumber[];
      status: number;
      valid: boolean;
    }
  >;

  getDealCount(overrides?: CallOverrides): Promise<BigNumber>;

  "getDealCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  getDealStatus(id: BigNumberish, overrides?: CallOverrides): Promise<number>;

  "getDealStatus(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    buyer(overrides?: CallOverrides): Promise<string>;

    "buyer()"(overrides?: CallOverrides): Promise<string>;

    creator(overrides?: CallOverrides): Promise<string>;

    "creator()"(overrides?: CallOverrides): Promise<string>;

    dealCount(overrides?: CallOverrides): Promise<BigNumber>;

    "dealCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    deals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber, number, boolean] & {
        id: BigNumber;
        erc20: string;
        erc721: string;
        price: BigNumber;
        status: number;
        valid: boolean;
      }
    >;

    "deals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber, number, boolean] & {
        id: BigNumber;
        erc20: string;
        erc721: string;
        price: BigNumber;
        status: number;
        valid: boolean;
      }
    >;

    erc20(overrides?: CallOverrides): Promise<string>;

    "erc20()"(overrides?: CallOverrides): Promise<string>;

    erc721(overrides?: CallOverrides): Promise<string>;

    "erc721()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    seller(overrides?: CallOverrides): Promise<string>;

    "seller()"(overrides?: CallOverrides): Promise<string>;

    makeDeal(
      _erc20: string,
      _erc721: string,
      _price: BigNumberish,
      _assetItems: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "makeDeal(address,address,uint256,uint256[])"(
      _erc20: string,
      _erc721: string,
      _price: BigNumberish,
      _assetItems: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    missingDealAssets(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "missingDealAssets(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    missingDealCoins(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "missingDealCoins(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    settle(id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "settle(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawDealAssets(
      dealId: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawDealAssets(uint256,uint256)"(
      dealId: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawDealCoins(
      dealId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawDealCoins(uint256)"(
      dealId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    "getOwner()"(overrides?: CallOverrides): Promise<string>;

    getBuyer(overrides?: CallOverrides): Promise<string>;

    "getBuyer()"(overrides?: CallOverrides): Promise<string>;

    getSeller(overrides?: CallOverrides): Promise<string>;

    "getSeller()"(overrides?: CallOverrides): Promise<string>;

    changeOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    "changeOwner(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getDeal(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber, BigNumber[], number, boolean] & {
        id: BigNumber;
        erc20: string;
        erc721: string;
        price: BigNumber;
        assetItems: BigNumber[];
        status: number;
        valid: boolean;
      }
    >;

    "getDeal(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber, BigNumber[], number, boolean] & {
        id: BigNumber;
        erc20: string;
        erc721: string;
        price: BigNumber;
        assetItems: BigNumber[];
        status: number;
        valid: boolean;
      }
    >;

    getDealCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getDealCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getDealStatus(id: BigNumberish, overrides?: CallOverrides): Promise<number>;

    "getDealStatus(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {
    Debug(message: null, num: null): EventFilter;
  };

  estimateGas: {
    buyer(overrides?: CallOverrides): Promise<BigNumber>;

    "buyer()"(overrides?: CallOverrides): Promise<BigNumber>;

    creator(overrides?: CallOverrides): Promise<BigNumber>;

    "creator()"(overrides?: CallOverrides): Promise<BigNumber>;

    dealCount(overrides?: CallOverrides): Promise<BigNumber>;

    "dealCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    deals(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "deals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    erc20(overrides?: CallOverrides): Promise<BigNumber>;

    "erc20()"(overrides?: CallOverrides): Promise<BigNumber>;

    erc721(overrides?: CallOverrides): Promise<BigNumber>;

    "erc721()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    seller(overrides?: CallOverrides): Promise<BigNumber>;

    "seller()"(overrides?: CallOverrides): Promise<BigNumber>;

    makeDeal(
      _erc20: string,
      _erc721: string,
      _price: BigNumberish,
      _assetItems: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "makeDeal(address,address,uint256,uint256[])"(
      _erc20: string,
      _erc721: string,
      _price: BigNumberish,
      _assetItems: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    missingDealAssets(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "missingDealAssets(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    missingDealCoins(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "missingDealCoins(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    settle(id: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "settle(uint256)"(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawDealAssets(
      dealId: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawDealAssets(uint256,uint256)"(
      dealId: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawDealCoins(
      dealId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawDealCoins(uint256)"(
      dealId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "getOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    getBuyer(overrides?: CallOverrides): Promise<BigNumber>;

    "getBuyer()"(overrides?: CallOverrides): Promise<BigNumber>;

    getSeller(overrides?: CallOverrides): Promise<BigNumber>;

    "getSeller()"(overrides?: CallOverrides): Promise<BigNumber>;

    changeOwner(newOwner: string, overrides?: Overrides): Promise<BigNumber>;

    "changeOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getDeal(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "getDeal(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDealCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getDealCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getDealStatus(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDealStatus(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "buyer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "creator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dealCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "dealCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "deals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    erc20(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "erc20()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    erc721(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "erc721()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    seller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "seller()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    makeDeal(
      _erc20: string,
      _erc721: string,
      _price: BigNumberish,
      _assetItems: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "makeDeal(address,address,uint256,uint256[])"(
      _erc20: string,
      _erc721: string,
      _price: BigNumberish,
      _assetItems: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    missingDealAssets(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "missingDealAssets(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    missingDealCoins(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "missingDealCoins(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    settle(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "settle(uint256)"(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawDealAssets(
      dealId: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawDealAssets(uint256,uint256)"(
      dealId: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawDealCoins(
      dealId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawDealCoins(uint256)"(
      dealId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBuyer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getBuyer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSeller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getSeller()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeOwner(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changeOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getDeal(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDeal(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDealCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getDealCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDealStatus(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDealStatus(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
