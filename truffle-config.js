var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "fat spring seek stereo deposit power access balance outdoor woman sense approve";
module.exports = {
    networks: {

        // localnode: {
        //     host: 'localhost',
        //     port: 30303, // By default Ganache runs on this port.
        //     network_id: "*" // network_id for ganache is 5777. However, by keeping * as value you can run this node on  any network
        // },
        ganache: {
            host: 'localhost',
            port: 7545, // By default Ganache runs on this port.
            network_id: "*" // network_id for ganache is 5777. However, by keeping * as value you can run this node on  any network
        },

        // ropsten: {
        //     provider: function() {
        //         return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/a52d89d7f34947b8b1f4a62f10299533")
        //     },
        //     network_id: 3,
        //     from: "0xf5916AF28644D275B8CA89C88547B30d983a4842"
        // },

        // rinkeby: {
        //     provider: function() {
        //         return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/a52d89d7f34947b8b1f4a62f10299533")
        //     },
        //     network_id: 4,
        //     from: "0xf5916AF28644D275B8CA89C88547B30d983a4842"
        // }
    }
}