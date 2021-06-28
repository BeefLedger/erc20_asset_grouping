// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.8.0;

import "../V1_1/ERC721BeefLedgerV1_1.sol";

contract ERC721BeefLedgerV1_2_1 is ERC721BeefLedgerV1_1 {

    function ownerOf(uint256 tokenId) external virtual view returns (address) {
        return _ownerOf(tokenId);
    }
}