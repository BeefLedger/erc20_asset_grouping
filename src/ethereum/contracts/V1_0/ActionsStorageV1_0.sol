// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.8.0;

import "../Ownable.sol";
import "./ResourceActionsV1_0.sol";
import "./CompaniesV1_0.sol";
import "./ERC721BeefLedgerV1_0.sol";

contract ActionsStorageV1_0 is Ownable {

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

    ResourceActionsV1_0 internal resourceActionsV1_0;
    ERC721BeefLedgerV1_0 internal erc721V1_0;
    CompaniesV1_0 internal companiesV1_0;
    

    struct EntryType {
        Actions entryType;
        address company;
        address signatorie;
        uint256[] uids;
        uint256 timestamp;
        uint256 required;
        address[] allowedCompanies;
        bool requiresMultisig;
        bool approved;
        uint256 inputOf;
        uint256 outputOf;
    }

    struct Validation {
        address company;
        address signatorie;
        uint256 timestamp;
    }

    ///@dev entry => Validation[]
    mapping(uint256 => Validation[]) public validations;

    ///@dev signatorie => (entry => hasVerified);
    mapping(address => mapping(uint256 => bool)) public verifiedEntry;

    ///@dev entry => user
    // mapping(uint256 => address) public userByEntry;

    ///@dev companyAddress => pos
    mapping(address => uint256[]) public entriesByCompany;

    ///@dev userAddress => pos
    mapping(address => uint256[]) public entriesByUser;

    ///@dev entry => EntryType
    mapping(uint256 => EntryType) public dataByEntry;

    uint256 public pos = 0;

    //upgradability
    bool internal _initialized;

    /*
     *  Modifiers
     */
    modifier authorization(address sender) {
        require(isSignatorieAuthorized(sender), "Only Company can perform this operation");
        _;
    }

    function initialize(address _multiSigWallet, address _erc721) public {
        require(!_initialized, "conract already initialized");
        require(_multiSigWallet != address(0), "Multisig contract cannot be 0");
        require(_erc721 != address(0), "ERC721 contract cannot be 0");
        erc721V1_0 = ERC721BeefLedgerV1_0(_erc721);
        setOwner(_multiSigWallet);
        _initialized = true;
    }

    function setResourceActionsContract(address _resourceActions) virtual public onlyOwner {
        require(_resourceActions != address(0), "Companies contract cannot be 0");
        resourceActionsV1_0 = ResourceActionsV1_0(_resourceActions);
        companiesV1_0 = CompaniesV1_0(resourceActionsV1_0.getCompaniesContract());
    }

    function setERC721(address _erc721) virtual public onlyOwner {
        require(_erc721 != address(0), "ERC721 contract cannot be 0");
        erc721V1_0 = ERC721BeefLedgerV1_0(_erc721);
    }

    function approveProduce(uint256 _entry) virtual public onlyOwner {
        EntryType storage entry = dataByEntry[_entry];
        require(!entry.approved, "Entry has already been approved");
        require(entry.requiresMultisig, "Multisig approve is not required");
        entry.approved = true;
    }

    function produce(uint256[] memory _uids) virtual public authorization(msg.sender) {
        require(getProducePermission(), "Not authorized");
        require(_uids.length > 0, "No uids provided");
        address companyAddress = getCompanyBySignatorie(msg.sender);
        require(companyAddress != address(0), "Company address cannot be 0");
        address[] memory companiesArray = new address[](1);
        companiesArray[0] = companyAddress;
        pos = pos + 1;
        entriesByCompany[companyAddress].push(pos);
        entriesByUser[msg.sender].push(pos);
        dataByEntry[pos] = EntryType({
            entryType: Actions.PRODUCE,
            company: companyAddress,
            signatorie: msg.sender,
            uids: _uids,
            timestamp: block.timestamp,
            required: 1,
            allowedCompanies: companiesArray,
            requiresMultisig: true,
            approved: false,
            inputOf: 0,
            outputOf: 0
        });
    }


    function measure(uint256[] memory _uids, uint256 _required, address[] memory _companies) virtual public authorization(msg.sender) {
        require(getMeasurePermission(), "Not authorized");
        require(_uids.length > 0, "No uids provided");
        require(_required > 0, "Required signatures must be greater than 0");
        require(_companies.length > 0, "Required companies must be greater than 0");
        address companyAddress = getCompanyBySignatorie(msg.sender);
        require(companyAddress != address(0), "Company address cannot be 0");
        pos = pos + 1;
        entriesByCompany[companyAddress].push(pos);
        entriesByUser[msg.sender].push(pos);
        dataByEntry[pos] = EntryType({
            entryType: Actions.MEASURE,
            company: companyAddress,
            signatorie: msg.sender,
            uids: _uids,
            timestamp: block.timestamp,
            required: _required,
            allowedCompanies: _companies,
            requiresMultisig: false,
            approved: false,
            inputOf: 0,
            outputOf: 0
        });
    }

    function pickUp(uint256[] memory _uids, uint256 _required, address[] memory _allowedCompanies)
        virtual public authorization(msg.sender) {
            require(getPickUpPermission(), "Not authorized");
            address companyAddress = getCompanyBySignatorie(msg.sender);
            require(companyAddress != address(0), "Company address cannot be 0");
            require(_uids.length > 0, "no resources to transport");
            for (uint256 i = 0; i < _uids.length; i++) {
                require(isCompanyOwner(companyAddress, _uids[i]), "Token Owner is not company");
            }
            transport(companyAddress, Actions.PICK_UP, _uids, _required, _allowedCompanies, 0, 0);
    }

    function dropOff(uint256[] memory _uids, uint256 _required, address[] memory _allowedCompanies,
      uint256 _outputOf) virtual public authorization(msg.sender) {
            require(_outputOf > 0, "Cannot dropoff without picking up");
            require(getDropOffPermission(), "Not authorized");
            address companyAddress = getCompanyBySignatorie(msg.sender);
            require(companyAddress != address(0), "Company address cannot be 0");
            transport(companyAddress, Actions.DROP_OFF, _uids, _required, _allowedCompanies, 0, _outputOf);
    }

    function transport(address companyAddress, Actions _entryType, uint256[] memory _uids, uint256 _required,
      address[] memory _allowedCompanies, uint256 _inputOf, uint256 _outputOf) virtual internal {
        require(_uids.length > 0, "No uids provided");
        require(_required > 1, "Required signatures must be greater than 1");

        //TODO: check if allowedcompanies are companies and have persmissions
        require(_allowedCompanies.length > 0, "Required companies must be greater than 0");
        pos = pos + 1;
        entriesByCompany[companyAddress].push(pos);
        entriesByUser[msg.sender].push(pos);
        dataByEntry[pos] = EntryType({
            entryType: _entryType,
            company: companyAddress,
            signatorie: msg.sender,
            uids: _uids,
            timestamp: block.timestamp,
            required: _required,
            allowedCompanies: _allowedCompanies,
            requiresMultisig: false,
            approved: false,
            inputOf: _inputOf,
            outputOf: _outputOf
        });

        if(_outputOf > 0) {
            //Update the pickup action by setting inputOf equals the new entry
            // pickup -> process(transport) -> dropoff
            require(keccak256(abi.encodePacked(dataByEntry[_outputOf].uids)) == keccak256(abi.encodePacked(_uids)), "Uids not matching");
            require(dataByEntry[_outputOf].entryType == Actions.PICK_UP, "Entry should be PickUp");
            require(dataByEntry[_outputOf].inputOf == 0, "inputOf already defined");
            bool isAllowed = false;
            for(uint256 i = 0; i < dataByEntry[_outputOf].allowedCompanies.length; i++) {
                if(dataByEntry[_outputOf].allowedCompanies[i] == companyAddress) {
                    isAllowed = true;
                    break;
                }
            }
            require(isAllowed, "Company is not allowed to perform this dropOff");
            dataByEntry[_outputOf].inputOf = pos;
            entriesByCompany[dataByEntry[_outputOf].company].push(pos);
        }
    }



    function validateEntry(uint256 _entry) virtual public authorization(msg.sender) {
        require(_entry >= 0, "entry must be greater than 0");
        require(!verifiedEntry[msg.sender][_entry], "User has already signed");
        address companyAddress = getCompanyBySignatorie(msg.sender);
        EntryType memory entry = dataByEntry[_entry];
        address[] memory allowedCompanies = entry.allowedCompanies;
       if(indexOf(allowedCompanies, companyAddress) >= 0) {
            validations[_entry].push(
                Validation({
                    company: companyAddress,
                    signatorie: msg.sender,
                    timestamp: block.timestamp
                })
            );
            verifiedEntry[msg.sender][_entry] = true;
       }
    }


    /**Getters */
    function getEntriesByCompany(address _company) virtual public view returns(uint256[] memory) {
        return entriesByCompany[_company];
    }

    function getEntriesByUser(address _user) virtual public view returns(uint256[] memory) {
        return entriesByUser[_user];
    }

    function getEntryData(uint256 _entry) virtual public view
      returns(Actions, address, address, uint256[] memory, uint256, uint256, address[] memory, bool, bool, uint256, uint256) {
        EntryType memory entry = dataByEntry[_entry];
        return (
            entry.entryType,
            entry.company,
            entry.signatorie,
            entry.uids,
            entry.timestamp,
            entry.required,
            entry.allowedCompanies,
            entry.requiresMultisig,
            entry.approved,
            entry.inputOf,
            entry.outputOf
        );
    }

    function getNumOfValidations(uint256 _entry) virtual public view returns (uint256) {
        return validations[_entry].length;
    }

    function getValidation(uint256 _entry, uint256 _pos) virtual public view returns (address, address, uint256) {
        Validation memory validation = validations[_entry][_pos];
        return(
            validation.company,
            validation.signatorie,
            validation.timestamp
        );
    }

    function userHasValidated(address _user, uint256 _entry) virtual public view returns (bool) {
        return verifiedEntry[_user][_entry];
    }

    function userCanValidate(uint256 _entry) virtual public view returns (bool) {
        address companyAddress = getCompanyBySignatorie(msg.sender);
        EntryType memory entry = dataByEntry[_entry];
        address[] memory allowedCompanies = entry.allowedCompanies;
        return indexOf(allowedCompanies, companyAddress) >= 0 && !verifiedEntry[msg.sender][_entry];
    }

    function indexOf(address[] memory self, address value) virtual public pure returns (uint8) {
        for(uint8 i = 0; i <= self.length; i++) {
            if(self[i] == value) return i;
        }
        return uint8(-1);
    }

    function isCompanyOwner(address companyAddress, uint256 uid) virtual internal view returns (bool) {
        return (erc721V1_0.getOwner(uid) == companyAddress);
    }

    function getResourceActionsContract() virtual public view returns (address) {
        return address(resourceActionsV1_0);
    }

    function getERC721Contract() virtual public view returns (address) {
        return address(erc721V1_0);
    }

    function getCompaniesContract() virtual public view returns (address) {
        return address(companiesV1_0);
    }

    function getProducePermission() virtual internal view returns (bool) {
        return resourceActionsV1_0.getPermission(resourceActionsV1_0.getProduceAction(), msg.sender);
    }

    function getMeasurePermission() virtual internal view returns (bool) {
        return resourceActionsV1_0.getPermission(resourceActionsV1_0.getMeasureAction(), msg.sender);
    }

    function getPickUpPermission() virtual internal view returns (bool) {
        return resourceActionsV1_0.getPermission(resourceActionsV1_0.getPickUpAction(), msg.sender);
    }

    function getDropOffPermission() virtual internal view returns (bool) {
        return resourceActionsV1_0.getPermission(resourceActionsV1_0.getDropOffAction(), msg.sender);
    }

    function getCompanyBySignatorie(address signatorie) virtual internal view returns (address) {
        return companiesV1_0.getCompanyBySignatorie(signatorie);
    }

    function isSignatorieAuthorized(address signatorie) virtual internal view returns (bool) {
        return companiesV1_0.isSignatorieAuthorized(signatorie);
    }

}
