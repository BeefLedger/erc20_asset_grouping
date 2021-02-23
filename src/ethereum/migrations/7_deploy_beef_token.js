const ERC20 = artifacts.require('ERC20Detailed.sol');

module.exports = async deployer => {
	await deployer.deploy(ERC20, 'BEEF Token', 'BEEF', 18);
	const erc20 = await ERC20.deployed();
	await erc20.mint(
		'0x005803EC094d99Dce0ed575987BeBAAf3575A3F0',
		'10000000000000000000000000'
	);
	await erc20.mint(
		'0x05db46b2588ebb55b4525b5d6103f41a776f9ec2',
		'10000000000000000000000000'
	);
	await erc20.mint(
		'0x625a950dbA4B5ccC56d9F95F8ca2815cd60EC864',
		'10000000000000000000000000'
	);
	await erc20.mint(
		'0xb61a5c33AFE25F81f1b53b00CF9bD68b40Da4E9a',
		'10000000000000000000000000'
	);
	await erc20.mint(
		'0x8Af692D0AEC688e3B7f10805A19D5217B9992FEE',
		'10000000000000000000000000'
	);
	await erc20.mint(
		'0x4b24237B8DdE2BEC052B5C36d6d2FcF22D9d44C5',
		'10000000000000000000000000'
	);
};
