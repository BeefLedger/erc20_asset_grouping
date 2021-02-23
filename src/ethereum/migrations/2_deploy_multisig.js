const MultisigProxy = artifacts.require('MultisigProxy.sol');
const MultisigWallet = artifacts.require('MultisigWalletV1_0.sol');
const MultisigWallet2 = artifacts.require('MultisigWalletV1_1.sol');
const encodeCall = require('../helpers/encodeCall');

module.exports = async deployer => {
	const accounts = [
		'0x005803EC094d99Dce0ed575987BeBAAf3575A3F0', //santiago jobmetester@gmail.com,
		'0x3A8E4Cc9deef5c4166f069245F715D15a6dA42ef'
	];

	// return deployer.deploy(MultisigWallet, accounts, 2)
	await deployer.deploy(MultisigWallet);
	await deployer.deploy(MultisigProxy);
	const initData = encodeCall(
		'initialize',
		['address[]', 'uint256'],
		[accounts, 1]
	);
	const proxy = await MultisigProxy.deployed();
	await proxy.upgradeToAndCall(MultisigWallet.address, initData);

	const multisig = await MultisigWallet.at(proxy.address);

	await deployer.deploy(MultisigWallet2);
	const initData2 = encodeCall(
		'initialize',
		['uint256'],
		[1]
	);
	await proxy.upgradeToAndCall(MultisigWallet2.address, initData2);
	const multisig2 = await MultisigWallet2.at(proxy.address);
	const cons = await multisig2.getTestVariable()
	console.log("testvariable", cons.toString())
	
};

//arguments: [[accounts[1], accounts[2], accounts[3]], 2]
