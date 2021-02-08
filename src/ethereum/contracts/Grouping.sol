// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.8.0;

import "./Ownable.sol";
import "./V1_1/ERC721BeefLedgerV1_1.sol";

contract Grouping is Ownable {

    address public rgToken;
    uint256[] public assets;

    /// operators are the erc721 owners that have been approved in this 
    address[] public operators;

    mapping (uint256 => bool) internal _isAsset;
    mapping (address => bool) internal _isOperator;

    ERC721BeefLedgerV1_1 internal _erc721V1_1;

    modifier onlyERC721() {
        require(address(_erc721V1_1) == msg.sender, "operator is not approved");
        _;
    }

    constructor(address _rgToken, address _erc721) {
        require(_rgToken != address(0), "RG Token address cannot be 0");
        require(_erc721 != address(0), "ERC721 address cannot be 0");
        rgToken = _rgToken;
        _erc721V1_1 = ERC721BeefLedgerV1_1(_erc721);
    }

    /* Allows a ERC721 Owner to add assets to the grouping contract */
    function approveOperator(address _operator) external onlyOwner {
        require(_operator != address(0), "Operator address cannot be 0");
        require(!_isOperator[_operator], "Operator already added");
        _isOperator[_operator] = true;
        operators.push(_operator);
    }

    function isOperatorApproved(address _operator) public view returns(bool) {
        return(_isOperator[_operator]);
    }

    function addAsset(uint256 _asset) external onlyERC721 returns(bool) {
        require(!_isAsset[_asset], "Asset already added");
        _isAsset[_asset] = true;
        assets.push(_asset);
        return true;
    }

    function isAssetAdded(uint256 _asset) public view returns(bool) {
        return(_isAsset[_asset]);
    }
}