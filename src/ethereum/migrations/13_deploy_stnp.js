const STNp = artifacts.require('STNp.sol');


module.exports = async deployer => {
    // await deployer.deploy(STNp, "STN Pay", "STNp");
    const deployed = await STNp.at("0x8607077Db38015657594213f6BCEe115C3a3e44e");
    await deployed.mint("0xc2613a350C90bCD3a9eF635369B2a40602702B9a", "100000000000000000000000")
    await deployed.mint("0x23C6599aAdF44Be7cbaD6D9051bb4C2255b2f713", "50000000000000000000000")
    await deployed.mint("0x8b503c95dC22F3F2b5d22BBA8a49451991EAF8c0", "50000000000000000000000")
}
