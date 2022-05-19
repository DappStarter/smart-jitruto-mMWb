require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe stove cruise spike exchange inner kangaroo army general'; 
let testAccounts = [
"0xb6bd3ec7dc56f2fba932d34936e656f8253186a079ab1356af3ed2e1975a642f",
"0x895d69640a7fcec103040f618de974009e3f6e392b73a2e2af175516edf38cbc",
"0xe45bf5e1af6a1ba9197140143f8f1610268ef900fb9aff33a3642c1b9c9835c7",
"0x32b0e23035f39a6aa6990bd2d954698f466fe62a057420d0938d3440917143fd",
"0x00c0c939512c9df2f00ac1bdeadf651884c359cfcba448fa1b1d26b0d996001f",
"0xa94c2a3efea3b448f9f088af4965e3850a63b2f3a9437c5389b1b6adcb2bc766",
"0x7a873bdcbdccba4ae702aa7c08536eaf55f17d8d05d821d8f30b3ba873bc3e52",
"0x7e237c0b06dff1743e30054cec5abda501a05b086aaace83b214a41a138987a3",
"0x7b456edbb5e4ac0d76c6ad211e37bcbdd4a1cdce8921322df4f1be4e42f358b5",
"0xf181c30a7062d0082ca934b1784d02d701e2721fce8b00eefdfda9081ba93a59"
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

