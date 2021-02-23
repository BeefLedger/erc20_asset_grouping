const ERC20 = artifacts.require('ERC20Detailed.sol');

module.exports = async deployer => {
	await deployer.deploy(ERC20, 'BEEF', 'BL', 18);
	const erc20 = await ERC20.deployed();
	await erc20.mint('0xE862b95FD8b8cE77BD96729abd5f54a7AbfDf7C7', '100');
};
