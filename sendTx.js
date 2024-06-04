const Web3 = require('web3');
const readline = require('readline');

// Web3 instance creation
const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-testnet.unit0.dev"));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendTransaction(privateKey, receiver, amount) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const sender = account.address;
    const value = web3.utils.toWei(amount, 'ether'); // Amount to send in Ether

    while (true) {
        try {
            const nonce = await web3.eth.getTransactionCount(sender, 'latest');
            console.log(`Nonce: ${nonce}`);

            const gasPrice = await web3.eth.getGasPrice();
            console.log(`Gas Price: ${gasPrice}`);

            const gasLimit = 21000; // Standard gas limit for ETH transfer
            console.log(`Gas Limit: ${gasLimit}`);

            const transaction = {
                'to': receiver,
                'value': value,
                'nonce': nonce,
                'gas': gasLimit,
                'gasPrice': gasPrice,
                'chainId': 88817 // Chain ID for testnet
            };

            const signedTransaction = await account.signTransaction(transaction);
            console.log(`Signed Transaction: ${signedTransaction.rawTransaction}`);

            const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
            console.log(`Transaction hash: ${receipt.transactionHash}`);
            console.log(`Transaction was successful: ${receipt.status}`);

            // 10 ile 50 saniye arasında rastgele bekleme süresi
            const waitTime = Math.floor(Math.random() * 40000) + 10000;
            console.log(`Waiting for ${waitTime / 1000} seconds before next transaction...`);
            await sleep(waitTime);
        } catch (error) {
            console.error(`Error sending transaction: ${error.message}`);
            console.log('Retrying transaction...');
        }
    }
}

(async () => {
    const privateKey = await askQuestion('Enter your private key: ');
    const receiver = await askQuestion('Enter the receiver address: ');
    const amount = await askQuestion('Enter the amount to send (in ETH): ');

    rl.close();

    sendTransaction(privateKey, receiver, amount);
})();
