var Payment = artifacts.require("./Payment.sol");

module.exports = function(deployer) {
  deployer.deploy(Payment);
};

var EscrowDB = artifacts.require("./EscrowDB.sol");

module.exports = function(deployer) {
  deployer.deploy(EscrowDB);
};
