const GroupingFactory = artifacts.require('GroupingFactoryV1_0.sol');
const Proxy = artifacts.require('OwnedUpgradeabilityProxy.sol')
const encodeCall  = require('./helpers/encodeCall');

module.exports = async deployer => {
    await deployer.deploy(GroupingFactory);
    await deployer.deploy(Proxy);

	const initData = encodeCall(
		'initialize',
		['address'],
		["0xfE208394A4E8e0baE2ded27CF259A81A6fbC6b4B"]
	);
	const proxy = await Proxy.deployed();
	await proxy.upgradeToAndCall(GroupingFactory.address, initData);
}
