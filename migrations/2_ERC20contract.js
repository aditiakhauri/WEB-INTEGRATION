const ERC20CONTRACT = artifacts.require("ERC20CONTRACT");

module.exports = function (deployer) {
  deployer.deploy(ERC20CONTRACT);
};
