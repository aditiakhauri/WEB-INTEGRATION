const erc20 = artifacts.require("erc20");

module.exports = function(deployer) {
  deployer.deploy(erc20);
};
