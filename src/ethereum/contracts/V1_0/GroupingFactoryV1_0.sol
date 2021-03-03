// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.8.0;

import "../Ownable.sol";
import "../Grouping.sol";

contract GroupingFactoryV1_0 is Ownable {

    /*
     *  Events
     */
    event DeployGrouping(address indexed grouping, address indexed _rgToken, address indexed _erc721);

    address[] public deployed;

    //upgradability
    bool internal _initialized;

    function initialize(address _multisigWallet) public {
        require(!_initialized, "conract already initialized");
        _initialized = true;
        setOwner(_multisigWallet);
    }

    function deployGrouping(address _rgToken, address _erc721) external onlyOwner {
        require(_rgToken != address(0), "RG Token address cannot be 0");
        require(_erc721 != address(0), "ERC721 address cannot be 0");
        Grouping grouping = new Grouping(_rgToken, _erc721);
        deployed.push(address(grouping));
        emit DeployGrouping(address(grouping), _rgToken, _erc721);
    }

    function getDeployed() external view returns(address[] memory) {
        return deployed;
    }
}