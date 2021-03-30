const ERC20Factory = artifacts.require('ERC20FactoryV1_0.sol');
const Proxy = artifacts.require('OwnedUpgradeabilityProxy.sol')
const encodeCall  = require('./helpers/encodeCall');

module.exports = async deployer => {
    // await deployer.deploy(ERC20Factory);
    // await deployer.deploy(Proxy);

	const initData = encodeCall(
		'initialize',
		['address'],
		["0xC91935D1FAF6BC5d0Afa28C4078a4878d6115765"]
	);
	console.log(initData)
	// const proxy = await Proxy.deployed();
	// await proxy.upgradeToAndCall(ERC20Factory.address, initData);
}
