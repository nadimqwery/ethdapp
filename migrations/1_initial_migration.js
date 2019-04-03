var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
    deployer.deploy(Migrations, { from: '0xf5916AF28644D275B8CA89C88547B30d983a4842' });
};