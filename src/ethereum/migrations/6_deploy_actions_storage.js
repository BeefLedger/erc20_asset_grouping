const MultisigProxy = artifacts.require('MultisigProxy.sol');
const ERC721Proxy = artifacts.require('ERC721Proxy.sol');
const ActionsStorageProxy = artifacts.require('ActionsStorageProxy.sol');
const ActionsStorage = artifacts.require('ActionsStorageV1_0.sol');
const encodeCall = require('../helpers/encodeCall');

module.exports = async deployer => {
	await deployer.deploy(ActionsStorage);
	await deployer.deploy(ActionsStorageProxy);
	const initData = encodeCall(
		'initialize',
		['address', 'address'],
		[MultisigProxy.address, ERC721Proxy.address]
	);
	const proxy = await ActionsStorageProxy.deployed();
	await proxy.upgradeToAndCall(ActionsStorage.address, initData);
};
