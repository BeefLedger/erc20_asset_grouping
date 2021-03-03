// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.8.0;

import "../Ownable.sol";
import "../Grouping.sol";

contract GroupingFactoryV1_0 is Ownable {

    /*
     *  Events
     */
    event DeployGrouping(address indexed grouping, address indexed _rgToken, address indexed _erc721);

    address[] private deployed;
    address[] private groupedTokens;

    // Mapping from rgToken to grouping contract
    mapping (address => address) internal _tokenToGrouped; 
    // Mapping from grouping contract to rgToken
    mapping (address => address) internal _groupedToToken; 

    //upgradability
    bool internal _initialized;

    function initialize(address _multisigWallet) public {
        require(!_initialized, "conract already initialized");
        _initialized = true;
        setOwner(_multisigWallet);
    }

    function deployGrouping(address _rgToken, address _erc721) external virtual onlyOwner {
        require(_rgToken != address(0), "RG Token address cannot be 0");
        require(_erc721 != address(0), "ERC721 address cannot be 0");
        require(_tokenToGrouped[_rgToken] == address(0), "RG Token already used");
        Grouping grouping = new Grouping(_rgToken, _erc721);
        deployed.push(address(grouping));
        groupedTokens.push(address(_rgToken));
        _tokenToGrouped[_rgToken] = address(grouping);
        _groupedToToken[address(grouping)] = address(_rgToken);
        emit DeployGrouping(address(grouping), _rgToken, _erc721);
    }

    function getGroupings() public virtual view returns(address[] memory) {
        return deployed;
    }

    function getGroupedTokens() public virtual view returns(address[] memory) {
        return groupedTokens;
    }

    function getToken(address _grouping) public virtual view returns(address) {
        return _groupedToToken[_grouping];
    }

    function getGrouping(address _rgToken) public virtual view returns(address) {
        return _tokenToGrouped[_rgToken];
    }
}