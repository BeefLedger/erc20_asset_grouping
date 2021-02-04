// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.8.0;

import "./Ownable.sol";

contract CompaniesV1_0 is Ownable {

    /*
     *  Events
     */
    event NewCompany(address indexed company, string name);
    event RemoveCompany(address indexed company);
    event NewSignatorie(address indexed company, address signatorie);
    event RemoveSignatorie(address indexed company, address signatorie);
    event ChangeCompanyName(string lastName, string newName);
    event ChangeCompanyIPFS(bytes32 lastIPFS, bytes32 newIPFS);

    /*
    * Storage
    */
    address[] public companies;

    mapping (address => bool) public isCompany;

    //address of signatorie pointing to company address
    mapping (address => address) public signatorie;

    //address of company pointing to company data
    mapping (address => Company) public companyData;

    //name of company poinintg to company data;
    //RIPEMD-160(bytes(companyName)) => address
    mapping (bytes20 => address) public companyByName;

    //upgradability
    bool internal _initialized;

    struct Company {
        uint256 createdAt;
        address[] signatories;
        string name;
        bytes32 ipfsLink;
    }

    /*
     *  Modifiers
     */
    modifier onlyCompany() {
        require(isCompany[msg.sender], "Only Company can perform this operation");
        _;
    }

    function initialize(address _multisigWallet) public {
        require(!_initialized, "conract already initialized");
        require(_multisigWallet != address(0), "Multisig address cannot be 0");
        setOwner(_multisigWallet);
        _initialized = true;
    }

    function addCompany(address _company, string memory _name, bytes32 _ipfsLink) virtual public onlyOwner {
        require(_company != address(0), "Address cannot be 0");
        require(!isCompany[_company], "Company is already created");
        require(bytes(_name).length > 0, "Company name cannot be empty");
        Company memory newCompany;
        newCompany.createdAt = block.timestamp;
        newCompany.name = _name;
        if(_ipfsLink.length > 0) newCompany.ipfsLink = _ipfsLink;
        isCompany[_company] = true;
        companyData[_company] = newCompany;
        companyByName[ripemd160(bytes(_name))] = _company;
        companies.push(_company);
        Company storage savedCompany = companyData[_company];
        savedCompany.signatories.push(_company);
        signatorie[_company] = _company;
        emit NewCompany(_company, _name);
    }

    function removeCompany(address _company) virtual public onlyOwner {
        require(_company != address(0), "Address cannot be 0");
        isCompany[_company] = false;
        emit RemoveCompany(_company);
    }

    function addSignatorie(address _signatorie) virtual public onlyCompany {
        require(_signatorie != address(0), "Signatorie address cannot be 0");
        require(signatorie[_signatorie] == address(0), "Signatorie already exists");
        Company storage company = companyData[msg.sender];
        company.signatories.push(_signatorie);
        signatorie[_signatorie] = msg.sender;
        emit NewSignatorie(msg.sender, _signatorie);
    }

    function removeSignatorie(address _signatorie) virtual public onlyCompany {
        require(_signatorie != address(0), "Signatorie address cannot be 0");
        require(signatorie[_signatorie] != address(0), "Siganatorie does not exist");
        require(!isCompany[_signatorie], "Cannot remove owner from signatories");
        Company storage company = companyData[msg.sender];
        address[] memory newSignatories = new address[](company.signatories.length-1);
        uint256 i = 0;
        for(uint256 j = 0; j < company.signatories.length; j++) {
            if(company.signatories[j] != _signatorie) {
                newSignatories[i] = company.signatories[j];
                i++;
            }
        }
        company.signatories = newSignatories;
        signatorie[_signatorie] = address(0);
        emit RemoveSignatorie(msg.sender, _signatorie);
    }

    function setCompanyData(string memory _name, bytes32 _ipfsLink) virtual public onlyCompany {
        Company storage company = companyData[msg.sender];
        if (bytes(_name).length != 0) {
            string memory lastName = company.name;
            company.name = _name;
            emit ChangeCompanyName(lastName, _name);
        }
        if (_ipfsLink.length != 0) {
            bytes32 lastIpfs = company.ipfsLink;
            company.ipfsLink = _ipfsLink;
            emit ChangeCompanyIPFS(lastIpfs, _ipfsLink);
        }
    }

    /**
    * Getters
    */

    function getAllCompanies() virtual public view returns(address[] memory) {
        return companies;
    }

    function isAddressCompany(address _company) virtual public view returns(bool) {
        return isCompany[_company];
    }

    function getCompanyBySignatorie(address _signatorie) virtual public view returns(address) {
        return signatorie[_signatorie];
    }

    function getCompanyByAddress(address _company) virtual public view
    returns(uint256, address[] memory, string memory, bytes32, bool) {
        Company memory company = companyData[_company];
        return(
            company.createdAt,
            company.signatories,
            company.name,
            company.ipfsLink,
            isCompany[_company]
        );
    }

    function getCompanyByName(string memory _stringName) virtual public view
    returns(uint256, address[] memory, string memory, bytes32, bool) {
        bytes20 _name = ripemd160(bytes(_stringName));
        address companyAddress = companyByName[_name];
        Company memory company = companyData[companyAddress];
        return(
            company.createdAt,
            company.signatories,
            company.name,
            company.ipfsLink,
            isCompany[companyAddress]
        );
    }

    function isSignatorieAuthorized(address _signatorie) virtual public view returns(bool) {
        bool hasCompany = signatorie[_signatorie] != address(0);
        if(!hasCompany) return false;
        return(isCompany[signatorie[_signatorie]]);
    }

}
