// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.8.0;

import "../V1_0/ActionsStorageV1_0.sol";
import "./ERC721BeefLedgerV1_1.sol";

contract ActionsStorageV1_1 is ActionsStorageV1_0 {

    ERC721BeefLedgerV1_1 internal erc721V1_1;

    //upgradability
    bool internal _initializedV11;

    function initializeV11(address _erc721) external {
        require(!_initializedV11, "contract already upgraded");
        require(_erc721 != address(0), "ERC721 contract cannot be 0");
        erc721V1_1 = ERC721BeefLedgerV1_1(_erc721);
        _initializedV11 = true;
    }

    function setERC721(address _erc721) virtual override public onlyOwner {
        require(_erc721 != address(0), "ERC721 contract cannot be 0");
        erc721V1_1 = ERC721BeefLedgerV1_1(_erc721);
    }

    function isCompanyOwner(address companyAddress, uint256 uid) virtual override internal view returns (bool) {
        return (erc721V1_1.getOwner(uid) == companyAddress);
    }

    function getERC721Contract() virtual override public view returns (address) {
        return address(erc721V1_1);
    }

}