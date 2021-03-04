const GroupingFactory = artifacts.require('GroupingFactoryV1_0.sol');
const Proxy = artifacts.require('OwnedUpgradeabilityProxy.sol')
const encodeCall  = require('./helpers/encodeCall');

module.exports = async deployer => {
    await deployer.deploy(GroupingFactory);
    await deployer.deploy(Proxy);

	const initData = encodeCall(
		'initialize',
		['address'],
		["0x8b10B852703E6225FA384FFb1Ae85040a9C59e72"]
	);
	const proxy = await Proxy.deployed();
	await proxy.upgradeToAndCall(GroupingFactory.address, initData);
}
