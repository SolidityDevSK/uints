const { Web3 } = require('web3');

// Web3 instance creation with custom HTTP provider
const web3 = new Web3("https://rpc-testnet.unit0.dev");

const privateKey = "0x1ab0cc8431667d98c73ecdcca4ba5d7f554ad30021bfcfe382f41bd76a57bd3f";
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
const sender = account.address;
const receiver = '0x7624C8bF0524434087fc84Fc458445023E151ff3'; 

function getRandomAmount() {
    // Generate a random number between 0.000001 and 0.00001
    const min = 0.000001;
    const max = 0.000003;
    return (Math.random() * (max - min) + min).toFixed(8); // toFixed(8) ensures 8 decimal places
}

function getRandomDelay() {
    // Generate a random delay between 10 and 20 seconds
    const min = 10000;
    const max = 20000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function fetchWithRetry(fetchFn, retries = 5, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        try {
            return await fetchFn();
        } catch (error) {
            if (i < retries - 1) {
                console.error(`Fetch error: ${error.message}. Retrying in ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
                delay *= 2; // Exponential backoff
            } else {
                throw error;
            }
        }
    }
}

async function sendTransaction() {
    try {
        let amountRand = getRandomAmount().toString();
        const amount = web3.utils.toWei(amountRand, 'ether'); // Amount to send in Ether

        const nonce = await fetchWithRetry(() => web3.eth.getTransactionCount(sender, 'latest'));
        console.log(`Nonce: ${nonce}`);

        const gasPrice = web3.utils.toWei('0.0000000025', 'ether'); // Set gas price to 2.5 Gwei
        console.log(`Gas Price: ${gasPrice}`);

        const gasLimit = 21000; // Standard gas limit for ETH transfer
        console.log(`Gas Limit: ${gasLimit}`);

        const transaction = {
            'to': receiver,
            'value': amount,
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

        return receipt;
    } catch (error) {
        if (error.message.includes('Nonce too low')) {
            console.error('Nonce too low, retrying with a new nonce...');
            return sendTransaction();
        } else if (error.message.includes('invalid json response body')) {
            console.error('Invalid JSON response, retrying transaction...');
            throw new Error('Retry due to invalid JSON response');
        } else {
            console.error(`Error sending transaction: ${error.message}`);
            throw error; // Re-throw error to handle it in the calling function
        }
    }
}

async function main() {
    while (true) {
        try {
            await sendTransaction();
        } catch (error) {
            console.log('Retrying transaction...');
        }
        // Wait for a random time between 10 and 20 seconds between transactions to avoid overloading the server
        const delay = getRandomDelay();
        console.log(`Waiting for ${delay}ms before next transaction...`);
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

main();
