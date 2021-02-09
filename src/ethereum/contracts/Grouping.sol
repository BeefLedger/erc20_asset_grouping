// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.8.0;

import "./V1_1/ERC721BeefLedgerV1_1.sol";

contract Grouping {

    address public rgToken;
    uint256[] private _assets;

    mapping (uint256 => bool) internal _isAddedAsset;
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

    function addAsset(uint256 _asset) external onlyERC721 returns(bool) {
        require(!_isAddedAsset[_asset], "Asset already added");
        _isAddedAsset[_asset] = true;
        _assets.push(_asset);
        return true;
    }

    function isAssetAdded(uint256 _asset) public view returns(bool) {
        return(_isAddedAsset[_asset]);
    }

    function getAssets() public view returns(uint256[] memory) {
        return _assets;
    }

    function getRGToken() public view returns(address) {
        return rgToken;
    }

    function getERC721Address() public view returns(address) {
        return address(_erc721V1_1);
    }
}