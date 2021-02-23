const MultisigProxy = artifacts.require('MultisigProxy.sol');
const ERC721Proxy = artifacts.require('ERC721Proxy.sol');
const ERC721 = artifacts.require('ERC721BeefLedgerV1_0.sol');
const encodeCall = require('../helpers/encodeCall');

module.exports = async deployer => {
	await deployer.deploy(ERC721);
	await deployer.deploy(ERC721Proxy);
	const initData = encodeCall(
		'initialize',
		['address'],
		[MultisigProxy.address]
	);
	const proxy = await ERC721Proxy.deployed();
	await proxy.upgradeToAndCall(ERC721.address, initData);
};
