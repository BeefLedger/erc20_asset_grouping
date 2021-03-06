// SPDX-License-Identifier: MIT

/// @dev this is interface is used for multisig decode calls

pragma solidity >=0.7.0 <0.8.0;

interface IMultisigCall {

    enum Actions {
        PRODUCE,
        PICK_UP,
        DROP_OFF,
        MODIFY,
        MOVE,
        TRANSFER_COMPLETE,
        ACCEPT,
        TRANSFER_CUSTODY,
        TRANSFER_ALL_RIGHTS,
        MEASURE
    }

    function setResourceActionsContract(address _resourceActions) external;
    function setERC721(address _erc721) external;
    function approveProduce(uint256 _entry) external;
    //CompaniesV1_0
    function addCompany(address _company, string memory _name, bytes32 _ipfsLink) external;
    function removeCompany(address _company) external;
    //ERC721BeefLedgerV1_0
    function setMultisigWallet(address payable multisig) external;
    //GroupingFactoryV1_0
    function deployGrouping(address _rgToken, address _erc721) external;
    //MultisigWalletV1_0
    function addOwner(address owner) external;
    function removeOwner(address owner) external;
    function replaceOwner(address owner, address newOwner) external;
    function changeRequirement(uint256 _required) external;
    //ResourceActionsV1_0
    function setCompaniesContract(address _companies) external;
    function setPermission(Actions _action, address _company, bool _allow) external;
    function setPermissions(uint8[] memory _permissions, address _company, bool _allow) external;
}
