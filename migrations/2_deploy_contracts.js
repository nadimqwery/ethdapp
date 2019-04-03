// var Payment = artifacts.require("./Payment.sol");

// module.exports = function(deployer) {
//     deployer.deploy(Payment);
// };

var EscrowDB = artifacts.require("./EscrowDB.sol");

module.exports = function(deployer) {
    deployer.deploy(EscrowDB, { from: '0xf5916AF28644D275B8CA89C88547B30d983a4842' });
};