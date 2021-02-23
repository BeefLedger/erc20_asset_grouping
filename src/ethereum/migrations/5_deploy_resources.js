const MultisigProxy = artifacts.require('MultisigProxy.sol');
const CompaniesProxy = artifacts.require('CompaniesProxy.sol');
const ResourceActionsProxy = artifacts.require('ResourceActionsProxy.sol');
const ResourceActions = artifacts.require('ResourceActionsV1_0.sol');
const encodeCall = require('../helpers/encodeCall');

module.exports = async deployer => {
	await deployer.deploy(ResourceActions);
	await deployer.deploy(ResourceActionsProxy);
	const initData = encodeCall(
		'initialize',
		['address', 'address'],
		[MultisigProxy.address, CompaniesProxy.address]
	);
	const proxy = await ResourceActionsProxy.deployed();
	await proxy.upgradeToAndCall(ResourceActions.address, initData);
};
