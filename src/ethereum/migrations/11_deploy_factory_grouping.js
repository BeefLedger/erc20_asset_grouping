const GroupingFactory = artifacts.require('GroupingFactoryV1_0.sol');
const Proxy = artifacts.require('OwnedUpgradeabilityProxy.sol')
const encodeCall  = require('./helpers/encodeCall');

module.exports = async deployer => {
    await deployer.deploy(GroupingFactory);
    await deployer.deploy(Proxy);

	const initData = encodeCall(
		'initialize',
		['address'],
		["0x59A915dAf882de7F79A405976EC82FfC02A52Dd2"]
	);
	const proxy = await Proxy.deployed();
	await proxy.upgradeToAndCall(GroupingFactory.address, initData);
}
