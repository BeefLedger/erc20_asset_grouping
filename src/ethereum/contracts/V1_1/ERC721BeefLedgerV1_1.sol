// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.8.0;

import "../V1_0/ERC721BeefLedgerV1_0.sol";
import "../Grouping.sol";

contract ERC721BeefLedgerV1_1 is ERC721BeefLedgerV1_0 {

    //In the form of uid -> groupingContractAddress
    mapping(uint256 => address) internal _groupedUids;

     //upgradability
    bool internal _initializedV11;

    function initializeV11() public {
        require(!_initializedV11, "contract already upgraded");
        _initializedV11 = true;
    }

    function addAssetsToGrouping(uint256[] memory _assets, address _groupingAddress) onlyMultisigV1_0 virtual external {
        require(_groupingAddress != address(0), "Grouping contract address cannot be 0");
        require(_assets.length <= 100, "maximum of tokens to add is 100");
        Grouping grouping = Grouping(_groupingAddress);
        for(uint8 i = 0; i < _assets.length; i++) {
            uint256 asset = _assets[i];
            require(exists(asset), "asset does not exist");
            require(grouping.addAsset(asset), "asset could not be stored into grouping");
            _groupedUids[asset] = _groupingAddress;
        }
    }

    function getGroupingAddress(uint256 _asset) virtual external view returns(address) {
        return _groupedUids[_asset];
    }
}