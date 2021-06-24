// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.8.0;

import "../V1_1/ERC721BeefLedgerV1_1.sol";
import "../Grouping.sol";

contract ERC721BeefLedgerV1_2 is ERC721BeefLedgerV1_1 {

     //upgradability
    bool internal _initializedV12;

    function initializeV12() public {
        require(!_initializedV12, "contract already upgraded");
        _initializedV12 = true;
    }

//    function ownerOf(uint256 tokenId) public override view returns (address) {
//         address owner = _tokenOwner[tokenId];
//         require(owner != address(0), "ERC721: owner query for nonexistent token");

//         return owner;
//     }
}