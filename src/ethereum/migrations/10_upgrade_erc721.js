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
	/** await deployer.deploy(ERC721V11);*/

	/** 2: Fetch deployed contract address */
	/** const erc721deployed = await ERC721V11.deployed(); */

	/** 3: Fetch deployed proxy contract*/
	/**  const erc721ProxyAddress = "0x737614D2116Ada57A340E7d05fab0f03a35Be283"; //Prod*/
	/**  const erc721ProxyAddress = "0x5e00cacA4f90712e7F69025d4468e8500542a1c3"; //Dev */
	/**  const erc721 = await ERC721V11.at(erc721ProxyAddress);*/

	/** 4: Encode data to initialize */
	/** const initData = encodeCall('initializeV11', [], []);*/

	/** 5: Upgrade proxy contract */
	/** await erc721Proxy.upgradeToAndCall(erc721deployed.address, initData); */

	/** Test with new contract functions */
	/** Fetch erc721 contract */
	/** const erc721 = await ERC721V11.at(erc721ProxyAddress); */
	/** call new functions */

	// await deployer.deploy(ERC721V11);

	/** 1: Deploy contract to upgrade */
	
}