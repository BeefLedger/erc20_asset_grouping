// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

import "./Ownable.sol";
import "./CompaniesV1_0.sol";

contract ResourceActionsV1_0 is Ownable {

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

    //userAddress -> (uid -> permission)
    mapping(address => mapping(uint8 => bool)) permissions;

    CompaniesV1_0 companiesV1_0;

    //upgradability
    bool internal _initialized;

    function initialize(address _multisigWallet, address _companies) public {
        require(!_initialized, "conract already initialized");
        require(_multisigWallet != address(0), "Multisig address cannot be 0");
        require(_companies != address(0), "Companies address cannot be 0");
        companiesV1_0 = CompaniesV1_0(_companies);
        setOwner(_multisigWallet);
        _initialized = true;
    }

    /** Setters */

    function setCompaniesContract(address _companies) public onlyOwner {
        require(_companies != address(0), "companiesV1_0 address cannot be 0");
        companiesV1_0 = CompaniesV1_0(_companies);
    }

    function setPermission(Actions _action, address _company, bool _allow) public onlyOwner {
        require(_company != address(0), "company address cannot be 0");
        permissions[_company][uint8(_action)] = _allow;
    }

    function setPermissions(uint8[] memory _permissions, address _company, bool _allow) public onlyOwner {
        require(_company != address(0), "company address cannot be 0");
        for(uint8 i = 0; i < _permissions.length; i++) {
             permissions[_company][_permissions[i]] = _allow;
        }
    }

    /** Getters */

    function getPermission(Actions _action, address _signatorie) public view returns (bool) {
        address company = getCompanyBySignatorie(_signatorie);
        return permissions[company][uint8(_action)];
    }

    function getProduceAction() public pure returns (Actions) {
        return Actions.PRODUCE;
    }

    function getDropOffAction() public pure returns (Actions) {
        return (Actions.DROP_OFF);
    }

    function getPickUpAction() public pure returns (Actions) {
        return (Actions.PICK_UP);
    }

    function getModifyAction() public pure returns (Actions) {
        return (Actions.MODIFY);
    }

    function getMoveAction() public pure returns (Actions) {
        return (Actions.MOVE);
    }

    function getTransferCompleteAction() public pure returns (Actions) {
        return (Actions.TRANSFER_COMPLETE);
    }

    function getMeasureAction() public pure returns (Actions) {
        return (Actions.MEASURE);
    }

    function getPermissions(address _signatorie) public view returns(bool, bool, bool, bool, bool, bool, bool, bool, bool, bool) {
        address company = getCompanyBySignatorie(_signatorie);
        return(
            getPermission(Actions.PRODUCE, company),
            getPermission(Actions.PICK_UP, company),
            getPermission(Actions.DROP_OFF, company),
            getPermission(Actions.MODIFY, company),
            getPermission(Actions.MOVE, company),
            getPermission(Actions.TRANSFER_COMPLETE, company),
            getPermission(Actions.ACCEPT, company),
            getPermission(Actions.TRANSFER_CUSTODY, company),
            getPermission(Actions.TRANSFER_ALL_RIGHTS, company),
            getPermission(Actions.MEASURE, company)
        );
    }

    function getAllActions() public pure returns (Actions, Actions, Actions, Actions, Actions, Actions, Actions,
      Actions, Actions, Actions) {
        return (
            Actions.PRODUCE,
            Actions.PICK_UP,
            Actions.DROP_OFF,
            Actions.MODIFY,
            Actions.MOVE,
            Actions.TRANSFER_COMPLETE,
            Actions.ACCEPT,
            Actions.TRANSFER_CUSTODY,
            Actions.TRANSFER_ALL_RIGHTS,
            Actions.MEASURE
        );
    }

    function getCompaniesContract() public view returns(address) {
        return address(companiesV1_0);
    }

    function getCompanyBySignatorie(address signatorie) internal view returns(address) {
        return companiesV1_0.getCompanyBySignatorie(signatorie);
    }
}