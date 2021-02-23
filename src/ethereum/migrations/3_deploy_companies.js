const MultisigProxy = artifacts.require('MultisigProxy.sol');
const CompaniesProxy = artifacts.require('CompaniesProxy.sol');
const Companies = artifacts.require('CompaniesV1_0.sol');
const encodeCall = require('../helpers/encodeCall');

module.exports = async deployer => {
	await deployer.deploy(Companies);
	await deployer.deploy(CompaniesProxy);
	const initData = encodeCall(
		'initialize',
		['address'],
		[MultisigProxy.address]
	);
	const proxy = await CompaniesProxy.deployed();
	await proxy.upgradeToAndCall(Companies.address, initData);
};
