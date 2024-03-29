// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Ownable.sol";

contract STNp is Ownable, ERC20 {

    
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
       
    }


    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }
}