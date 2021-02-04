// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

import "./Ownable.sol";

contract Grouping is Ownable {

    address public rgToken;
    uint256[] public assets;
    mapping (uint256 => bool) internal _assets;


    constructor(address _rgToken, address _erc721) public {
        require(_rgToken != address(0), "RG Token address cannot be 0");
        require(_erc721 != address(0), "ERC721 address cannot be 0");
        rgToken = _rgToken;
        
    }


    function addAssets(uint256[] memory _uids) external onlyOwner {
        require(_uids.length <= 100, "Maximum of tokens to add is 100");

        for(uint8 i = 0; i < _uids.length; i++) {
           
            if(!_assets[_uids[i]]) {
                _assets[_uids[i]] = true;
            }
        }

    }
}