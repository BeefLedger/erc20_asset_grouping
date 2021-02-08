// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.8.0;

import "../ERC20FactoryV1_0.sol";


contract ERC20FactoryV1_1 is ERC20FactoryV1_0 {
    
    bool internal _initializedV11;

    uint public testVariable;

    function initializeV11(uint _testVariable) public {
        require(!_initializedV11);
        testVariable = _testVariable;
    }

    function getTestVariable() virtual public view returns(uint) {
        return testVariable;
    }
}