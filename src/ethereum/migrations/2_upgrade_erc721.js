const ERC721V11 = artifacts.require('ERC721BeefLedgerV1_1.sol');

module.exports = async deployer => {
    await deployer.deploy(ERC721V11);
	// await deployer.deploy(ERC721Proxy);
	// const initData = encodeCall(
	// 	'initialize',
	// 	['address'],
	// 	[MultisigProxy.address]
	// );
	// const proxy = await ERC721Proxy.deployed();
	// await proxy.upgradeToAndCall(ERC721.address, initData);
}