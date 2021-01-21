/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface Erc20ForAssetGroupingInterface extends Interface {
  functions: {
    allowance: TypedFunctionDescription<{
      encode([owner, spender]: [string, string]): string;
    }>;

    approve: TypedFunctionDescription<{
      encode([spender, amount]: [string, BigNumberish]): string;
    }>;

    assetGouping: TypedFunctionDescription<{ encode([]: []): string }>;

    balanceOf: TypedFunctionDescription<{
      encode([account]: [string]): string;
    }>;

    chainId: TypedFunctionDescription<{ encode([]: []): string }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    decreaseAllowance: TypedFunctionDescription<{
      encode([spender, subtractedValue]: [string, BigNumberish]): string;
    }>;

    increaseAllowance: TypedFunctionDescription<{
      encode([spender, addedValue]: [string, BigNumberish]): string;
    }>;

    name: TypedFunctionDescription<{ encode([]: []): string }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    renounceOwnership: TypedFunctionDescription<{ encode([]: []): string }>;

    symbol: TypedFunctionDescription<{ encode([]: []): string }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transfer: TypedFunctionDescription<{
      encode([recipient, amount]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([sender, recipient, amount]: [
        string,
        string,
        BigNumberish
      ]): string;
    }>;

    transferOwnership: TypedFunctionDescription<{
      encode([newOwner]: [string]): string;
    }>;

    setAssetGrouping: TypedFunctionDescription<{
      encode([_assetGrouping]: [string]): string;
    }>;

    mint: TypedFunctionDescription<{
      encode([account, amount]: [string, BigNumberish]): string;
    }>;
  };

  events: {
    Approval: TypedEventDescription<{
      encodeTopics([owner, spender, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([previousOwner, newOwner]: [
        string | null,
        string | null
      ]): string[];
    }>;

    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class Erc20ForAssetGrouping extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Erc20ForAssetGrouping;
  attach(addressOrName: string): Erc20ForAssetGrouping;
  deployed(): Promise<Erc20ForAssetGrouping>;

  on(event: EventFilter | string, listener: Listener): Erc20ForAssetGrouping;
  once(event: EventFilter | string, listener: Listener): Erc20ForAssetGrouping;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): Erc20ForAssetGrouping;
  removeAllListeners(eventName: EventFilter | string): Erc20ForAssetGrouping;
  removeListener(eventName: any, listener: Listener): Erc20ForAssetGrouping;

  interface: Erc20ForAssetGroupingInterface;

  functions: {
    /**
     * See {IERC20-allowance}.
     */
    allowance(
      owner: string,
      spender: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC20-allowance}.
     */
    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.
     */
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.
     */
    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    assetGouping(overrides?: TransactionOverrides): Promise<string>;

    "assetGouping()"(overrides?: TransactionOverrides): Promise<string>;

    /**
     * See {IERC20-balanceOf}.
     */
    balanceOf(
      account: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC20-balanceOf}.
     */
    "balanceOf(address)"(
      account: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    chainId(overrides?: TransactionOverrides): Promise<BigNumber>;

    "chainId()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.
     */
    decimals(overrides?: TransactionOverrides): Promise<number>;

    /**
     * Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.
     */
    "decimals()"(overrides?: TransactionOverrides): Promise<number>;

    /**
     * Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.
     */
    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.
     */
    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.
     */
    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.
     */
    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Returns the name of the token.
     */
    name(overrides?: TransactionOverrides): Promise<string>;

    /**
     * Returns the name of the token.
     */
    "name()"(overrides?: TransactionOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: TransactionOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: TransactionOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Returns the symbol of the token, usually a shorter version of the name.
     */
    symbol(overrides?: TransactionOverrides): Promise<string>;

    /**
     * Returns the symbol of the token, usually a shorter version of the name.
     */
    "symbol()"(overrides?: TransactionOverrides): Promise<string>;

    /**
     * See {IERC20-totalSupply}.
     */
    totalSupply(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * See {IERC20-totalSupply}.
     */
    "totalSupply()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.
     */
    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.
     */
    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.
     */
    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.
     */
    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Asset grouping contract address from the private chain.
     */
    setAssetGrouping(
      _assetGrouping: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Asset grouping contract address from the private chain.
     */
    "setAssetGrouping(address)"(
      _assetGrouping: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "mint(address,uint256)"(
      account: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  /**
   * See {IERC20-allowance}.
   */
  allowance(
    owner: string,
    spender: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  /**
   * See {IERC20-allowance}.
   */
  "allowance(address,address)"(
    owner: string,
    spender: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  /**
   * See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.
   */
  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.
   */
  "approve(address,uint256)"(
    spender: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  assetGouping(overrides?: TransactionOverrides): Promise<string>;

  "assetGouping()"(overrides?: TransactionOverrides): Promise<string>;

  /**
   * See {IERC20-balanceOf}.
   */
  balanceOf(
    account: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  /**
   * See {IERC20-balanceOf}.
   */
  "balanceOf(address)"(
    account: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  chainId(overrides?: TransactionOverrides): Promise<BigNumber>;

  "chainId()"(overrides?: TransactionOverrides): Promise<BigNumber>;

  /**
   * Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.
   */
  decimals(overrides?: TransactionOverrides): Promise<number>;

  /**
   * Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.
   */
  "decimals()"(overrides?: TransactionOverrides): Promise<number>;

  /**
   * Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.
   */
  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.
   */
  "decreaseAllowance(address,uint256)"(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.
   */
  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.
   */
  "increaseAllowance(address,uint256)"(
    spender: string,
    addedValue: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Returns the name of the token.
   */
  name(overrides?: TransactionOverrides): Promise<string>;

  /**
   * Returns the name of the token.
   */
  "name()"(overrides?: TransactionOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: TransactionOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  "owner()"(overrides?: TransactionOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  "renounceOwnership()"(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Returns the symbol of the token, usually a shorter version of the name.
   */
  symbol(overrides?: TransactionOverrides): Promise<string>;

  /**
   * Returns the symbol of the token, usually a shorter version of the name.
   */
  "symbol()"(overrides?: TransactionOverrides): Promise<string>;

  /**
   * See {IERC20-totalSupply}.
   */
  totalSupply(overrides?: TransactionOverrides): Promise<BigNumber>;

  /**
   * See {IERC20-totalSupply}.
   */
  "totalSupply()"(overrides?: TransactionOverrides): Promise<BigNumber>;

  /**
   * See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.
   */
  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.
   */
  "transfer(address,uint256)"(
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.
   */
  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.
   */
  "transferFrom(address,address,uint256)"(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  "transferOwnership(address)"(
    newOwner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Asset grouping contract address from the private chain.
   */
  setAssetGrouping(
    _assetGrouping: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Asset grouping contract address from the private chain.
   */
  "setAssetGrouping(address)"(
    _assetGrouping: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  mint(
    account: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "mint(address,uint256)"(
    account: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimate: {
    /**
     * See {IERC20-allowance}.
     */
    allowance(
      owner: string,
      spender: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC20-allowance}.
     */
    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.
     */
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.
     */
    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    assetGouping(overrides?: TransactionOverrides): Promise<BigNumber>;

    "assetGouping()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * See {IERC20-balanceOf}.
     */
    balanceOf(
      account: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC20-balanceOf}.
     */
    "balanceOf(address)"(
      account: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    chainId(overrides?: TransactionOverrides): Promise<BigNumber>;

    "chainId()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.
     */
    decimals(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.
     */
    "decimals()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.
     */
    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.
     */
    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.
     */
    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.
     */
    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the name of the token.
     */
    name(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Returns the name of the token.
     */
    "name()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Returns the symbol of the token, usually a shorter version of the name.
     */
    symbol(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Returns the symbol of the token, usually a shorter version of the name.
     */
    "symbol()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * See {IERC20-totalSupply}.
     */
    totalSupply(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * See {IERC20-totalSupply}.
     */
    "totalSupply()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.
     */
    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.
     */
    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.
     */
    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.
     */
    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Asset grouping contract address from the private chain.
     */
    setAssetGrouping(
      _assetGrouping: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Asset grouping contract address from the private chain.
     */
    "setAssetGrouping(address)"(
      _assetGrouping: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "mint(address,uint256)"(
      account: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;
  };
}
