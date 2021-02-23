const ERC721V11 = artifacts.require('ERC721BeefLedgerV1_1.sol');
const ERC721Proxy = artifacts.require('OwnedUpgradeabilityProxy.sol')
const abi = require('ethereumjs-abi');


function encodeCall(name, args, values) {
	const methodId = abi.methodID(name, args).toString('hex');
	const params = abi.rawEncode(args, values).toString('hex');
	return '0x' + methodId + params;
}

module.exports = async deployer => {


	// await deployer.deploy(ERC721V11);

	const erc721ProxyAddress = "0x737614D2116Ada57A340E7d05fab0f03a35Be283";
	// const initData = encodeCall(
	// 	'initializeV11',
	// 	[],
	// 	[]
	// );
	const erc721deployed = await ERC721V11.deployed();
	// const erc721Proxy = await ERC721Proxy.at(erc721ProxyAddress);

	// await erc721Proxy.upgradeToAndCall(erc721deployed.address, initData);

	const erc721 = await ERC721V11.at(erc721ProxyAddress);
	const totalTokens = await erc721.getTotalTokens();
	console.log(totalTokens.toString())

    


	// await deployer.deploy(ERC721Proxy);
	// const initData = encodeCall(
	// 	'initialize',
	// 	['address'],
	// 	[MultisigProxy.address]
	// );
	// const proxy = await ERC721Proxy.deployed();
	// await proxy.upgradeToAndCall(ERC721.address, initData);
}