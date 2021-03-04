const ERC20Factory = artifacts.require('ERC20FactoryV1_0.sol');
const Proxy = artifacts.require('OwnedUpgradeabilityProxy.sol')
const encodeCall  = require('./helpers/encodeCall');

module.exports = async deployer => {
    await deployer.deploy(ERC20Factory);
    await deployer.deploy(Proxy);

	const initData = encodeCall(
		'initialize',
		['address'],
		["0x3A8E4Cc9deef5c4166f069245F715D15a6dA42ef"]
	);
	const proxy = await Proxy.deployed();
	await proxy.upgradeToAndCall(ERC20Factory.address, initData);
}
