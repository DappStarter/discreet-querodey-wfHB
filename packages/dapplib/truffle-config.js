require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remind concert grace nature suit skill'; 
let testAccounts = [
"0x81141d5e6d30deb1fe78ac8646614a3b3842fa49bca0cc2533be2eb4d0bd8de4",
"0x316a00498e129e1fb1b72697f8d100e3c87c927a65b306018daa22b62d707718",
"0x298b59748617ad2c3eb83efb2c5e4ac8b6e6c54cef9f6f86717b7ca09968cc6e",
"0x759581dccbd696f71aac44080000a8c96e02f17f61d9db486f4630724c7491ae",
"0x9277f3b92576c088b1a1c3445fb87082faca6aa51748c7c452f62d97ecda6bf2",
"0x6e7c96509f2cf3a5ff5cbbe7f1b307e1fa23d4d42f45552f7944d31904e8f7ba",
"0x4340b2d5c9d4bb6c1c9bce204994d30b3054b1110d1d65ca4d3a4c1bb2213ee6",
"0x82f61c452478cdd15dea688aa1c717fd4c101c40096bbc83002867ac46e49296",
"0xa84fa87803a8caf1eceeaadedaa1b580536602bc6d6fd385bb005e6e8f2bfc2f",
"0xd9df00693c1b6a7bb099fb45952b58f703ea1acbe15a911b5a97f178a92655ca"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

