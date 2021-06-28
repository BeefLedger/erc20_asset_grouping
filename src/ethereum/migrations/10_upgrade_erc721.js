const ERC721V12 = artifacts.require('ERC721BeefLedgerV1_2.sol');
const ERC721Proxy = artifacts.require('OwnedUpgradeabilityProxy.sol')
const abi = require('ethereumjs-abi');


function encodeCall(name, args, values) {
	const methodId = abi.methodID(name, args).toString('hex');
	const params = abi.rawEncode(args, values).toString('hex');
	return '0x' + methodId + params;
}

module.exports = async deployer => {

	/** Steps */

	/** 1: Deploy contract to upgrade */
	/** await deployer.deploy(ERC721V12);*/

	/** 2: Fetch deployed contract address */
	/** const erc721deployed = await ERC721V12.deployed(); */

	/** 3: Fetch deployed proxy contract*/
	/**  const erc721ProxyAddress = "0x737614D2116Ada57A340E7d05fab0f03a35Be283"; //Prod*/
	/**  const erc721ProxyAddress = "0x5e00cacA4f90712e7F69025d4468e8500542a1c3"; //Dev */
	/**  const erc721 = await ERC721V12.at(erc721ProxyAddress);*/

	/** 4: Encode data to initialize */
	/** const initData = encodeCall('initializeV11', [], []);*/

	/** 5: Upgrade proxy contract */
	/** await erc721Proxy.upgradeToAndCall(erc721deployed.address, initData); */

	/** Test with new contract functions */
	/** Fetch erc721 contract */
	/** const erc721 = await ERC721V12.at(erc721ProxyAddress); */
	/** call new functions */

	// await deployer.deploy(ERC721V12);

	/** 1: Deploy contract to upgrade */
	// await deployer.deploy(ERC721V12);

	// /** 2: Fetch deployed contract address */
	// const erc721deployed = await ERC721V12.deployed();

	// /** 3: Fetch deployed proxy contract*/
	const erc721ProxyAddress = "0x737614D2116Ada57A340E7d05fab0f03a35Be283";
	// const erc721Proxy = await ERC721Proxy.at(erc721ProxyAddress);

	// /** 4: Encode data to initialize */
	// const initData = encodeCall('initializeV121', [], []);

	// /** 5: Upgrade proxy contract */
	// await erc721Proxy.upgradeTo(erc721deployed.address);

	/** Test with new contract functions */
	/** Fetch erc721 contract */
	const erc721 = await ERC721V12.at(erc721ProxyAddress);
	/** call new functions */
	
	console.log("ownerOf 99977431", await erc721.ownerOf("99977431"))
	console.log("ownerOf 1000031157593", await erc721.ownerOf("1000031157593"))
	console.log("ownerOf 1000031157626", await erc721.ownerOf("1000031157626"))
	console.log("ownerOf 1000031157827", await erc721.ownerOf("1000031157827"))
}