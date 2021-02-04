// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

import "./Ownable.sol";
import "./ERC20ForAssetGrouping.sol";


contract ERC20Factory is Ownable {

    event NewERC20(address indexed tokenAddress, address indexed owner);

    address[] public tokens;

    function deploy(uint256 _chainId, string memory _name, string memory _symbol) public onlyOwner {
        ERC20ForAssetGrouping uToken = new ERC20ForAssetGrouping(_chainId, _name, _symbol);
        uToken.transferOwnership(msg.sender);
        tokens.push(address(uToken));
        emit NewERC20(address(uToken), msg.sender);
    }

    function getTokens() public view returns(address[] memory) {
        return tokens;
    }
}