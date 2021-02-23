const Plurality = artifacts.require('Plurality.sol');
const ERC20 = artifacts.require('ERC20Detailed.sol');


module.exports = async deployer => {
    await deployer.deploy(Plurality, ERC20.address);
}
