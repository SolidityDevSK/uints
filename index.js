// // // const {Web3} = require('web3');

// // // // Web3 instance creation
// // // const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-testnet.unit0.dev"));

// // // const privateKey = "0x73287fb0408eaa115b762e0454fe238f80d283d6f272364bb2b95aba1c34e6e3";
// // // const account = web3.eth.accounts.privateKeyToAccount(privateKey);

// // // const sender = account.address;
// // // const receiver = '0x8FBDbFEf9eC457CF48eF4a3cC784556C2Ac296dA'; // Receiver's address
// // // const amount = web3.utils.toWei('0.00001', 'ether'); // Amount to send in Ether

// // // async function sendTransaction() {
// // //     try {
// // //         const nonce = await web3.eth.getTransactionCount(sender, 'latest');
// // //         console.log(`Nonce: ${nonce}`);

// // //         const gasPrice = await web3.eth.getGasPrice();
// // //         console.log(`Gas Price: ${gasPrice}`);

// // //         const gasLimit = 21000; // Standard gas limit for ETH transfer
// // //         console.log(`Gas Limit: ${gasLimit}`);

// // //         const transaction = {
// // //             'to': receiver,
// // //             'value': amount,
// // //             'nonce': nonce,
// // //             'gas': gasLimit,
// // //             'gasPrice': gasPrice,
// // //             'chainId': 88817 // Chain ID for testnet
// // //         };

// // //         const signedTransaction = await account.signTransaction(transaction);
// // //         console.log(`Signed Transaction: ${signedTransaction.rawTransaction}`);

// // //         const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
// // //         console.log(`Transaction hash: ${receipt.transactionHash}`);
// // //         console.log(`Transaction was successful: ${receipt.status}`);
// // //     } catch (error) {
// // //         console.error(`Error sending transaction: ${error.message}`);
// // //     }
// // // }

// // // sendTransaction();









// // const { Web3 } = require('web3');

// // // Web3 instance creation
// // const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-testnet.unit0.dev"));

// // const privateKey = "0x73287fb0408eaa115b762e0454fe238f80d283d6f272364bb2b95aba1c34e6e3";
// // const account = web3.eth.accounts.privateKeyToAccount(privateKey);

// // const sender = account.address;
// // const receiver = '0x8FBDbFEf9eC457CF48eF4a3cC784556C2Ac296dA'; // Receiver's address

// // function getRandomAmount() {
// //     // Generate a random number between 0.000001 and 0.00001
// //     const min = 0.000001;
// //     const max = 0.00001;
// //     return (Math.random() * (max - min) + min).toFixed(8); // toFixed(8) ensures 8 decimal places
// // }
// // async function sendTransaction() {
// //     while (true) {
        
// //         try {
// //             let amountRand = getRandomAmount().toString();
// //             const amount = web3.utils.toWei(amountRand, 'ether'); // Amount to send in Ether
// //             const nonce = await web3.eth.getTransactionCount(sender, 'latest');
// //             console.log(`Nonce: ${nonce}`);

// //             const gasPrice = await web3.eth.getGasPrice();
// //             console.log(`Gas Price: ${gasPrice}`);

// //             const gasLimit = 21000; // Standard gas limit for ETH transfer
// //             console.log(`Gas Limit: ${gasLimit}`);

// //             const transaction = {
// //                 'to': receiver,
// //                 'value': amount,
// //                 'nonce': nonce,
// //                 'gas': gasLimit,
// //                 'gasPrice': gasPrice,
// //                 'chainId': 88817 // Chain ID for testnet
// //             };

// //             const signedTransaction = await account.signTransaction(transaction);
// //             console.log(`Signed Transaction: ${signedTransaction.rawTransaction}`);

// //             const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
// //             console.log(`Transaction hash: ${receipt.transactionHash}`);
// //             console.log(`Transaction was successful: ${receipt.status}`);

       
// //         } catch (error) {
// //             console.error(`Error sending transaction: ${error.message}`);
// //             console.log('Retrying transaction...');
// //         }
// //     }
// // }

// // sendTransaction();


// // const { Web3 } = require('web3');
// // const fetch = require('node-fetch');

// // // Custom HTTP provider with error handling for invalid JSON responses
// // class CustomHttpProvider extends Web3.providers.HttpProvider {
// //     constructor(url) {
// //         super(url);
// //     }

// //     async send(payload, callback) {
// //         try {
// //             const response = await fetch(this.host, {
// //                 method: 'POST',
// //                 body: JSON.stringify(payload),
// //                 headers: this.headers,
// //                 timeout: this.timeout
// //             });

// //             if (response.ok) {
// //                 const json = await response.json();
// //                 callback(null, json);
// //             } else {
// //                 callback(new Error(`HTTP error: ${response.statusText}`), null);
// //             }
// //         } catch (err) {
// //             callback(new Error(`FetchError: ${err.message}`), null);
// //         }
// //     }
// // }

// // // Web3 instance creation with custom HTTP provider
// // const web3 = new Web3(new CustomHttpProvider("https://rpc-testnet.unit0.dev"));

// // const privateKey = "0x73287fb0408eaa115b762e0454fe238f80d283d6f272364bb2b95aba1c34e6e3";
// // const account = web3.eth.accounts.privateKeyToAccount(privateKey);

// // const sender = account.address;
// // const receiver = '0x8FBDbFEf9eC457CF48eF4a3cC784556C2Ac296dA'; // Receiver's address

// // function getRandomAmount() {
// //     // Generate a random number between 0.000001 and 0.00001
// //     const min = 0.000001;
// //     const max = 0.00001;
// //     return (Math.random() * (max - min) + min).toFixed(8); // toFixed(8) ensures 8 decimal places
// // }

// // async function sendTransaction() {
// //     while (true) {
// //         try {
// //             let amountRand = getRandomAmount().toString();
// //             const amount = web3.utils.toWei(amountRand, 'ether'); // Amount to send in Ether
// //             const nonce = await web3.eth.getTransactionCount(sender, 'latest');
// //             console.log(`Nonce: ${nonce}`);

// //             const gasPrice = await web3.eth.getGasPrice();
// //             console.log(`Gas Price: ${gasPrice}`);

// //             const gasLimit = 21000; // Standard gas limit for ETH transfer
// //             console.log(`Gas Limit: ${gasLimit}`);

// //             const transaction = {
// //                 'to': receiver,
// //                 'value': amount,
// //                 'nonce': nonce,
// //                 'gas': gasLimit,
// //                 'gasPrice': gasPrice,
// //                 'chainId': 88817 // Chain ID for testnet
// //             };

// //             const signedTransaction = await account.signTransaction(transaction);
// //             console.log(`Signed Transaction: ${signedTransaction.rawTransaction}`);

// //             const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
// //             console.log(`Transaction hash: ${receipt.transactionHash}`);
// //             console.log(`Transaction was successful: ${receipt.status}`);

// //         } catch (error) {
// //             console.error(`Error sending transaction: ${error.message}`);
// //             console.log('Retrying transaction...');
// //         }
// //     }
// // }

// // sendTransaction();



// const { Web3 } = require('web3');
// const fetch = require('node-fetch');

// // Custom HTTP provider with error handling for invalid JSON responses
// class CustomHttpProvider extends Web3.providers.HttpProvider {
//     constructor(url) {
//         super(url);
//     }

//     async send(payload, callback) {
//         try {
//             const response = await fetch(this.host, {
//                 method: 'POST',
//                 body: JSON.stringify(payload),
//                 headers: this.headers,
//                 timeout: this.timeout
//             });

//             if (response.ok) {
//                 const contentType = response.headers.get('content-type');
//                 if (contentType && contentType.includes('application/json')) {
//                     const json = await response.json();
//                     callback(null, json);
//                 } else {
//                     throw new Error(`Invalid content-type: ${contentType}`);
//                 }
//             } else {
//                 callback(new Error(`HTTP error: ${response.statusText}`), null);
//             }
//         } catch (err) {
//             callback(new Error(`FetchError: ${err.message}`), null);
//         }
//     }
// }

// // Web3 instance creation with custom HTTP provider
// const web3 = new Web3(new CustomHttpProvider("https://rpc-testnet.unit0.dev"));

// const privateKey = "0x73287fb0408eaa115b762e0454fe238f80d283d6f272364bb2b95aba1c34e6e3";
// const account = web3.eth.accounts.privateKeyToAccount(privateKey);

// const sender = account.address;
// const receiver = '0x8FBDbFEf9eC457CF48eF4a3cC784556C2Ac296dA'; // Receiver's address

// function getRandomAmount() {
//     // Generate a random number between 0.000001 and 0.00001
//     const min = 0.000001;
//     const max = 0.00001;
//     return (Math.random() * (max - min) + min).toFixed(8); // toFixed(8) ensures 8 decimal places
// }


// async function sendTransaction() {
//     while (true) {
//         try {
//             let amountRand = getRandomAmount().toString();
//             const amount = web3.utils.toWei(amountRand, 'ether'); // Amount to send in Ether

//             // Get the current nonce
//             const nonce = await web3.eth.getTransactionCount(sender, 'latest');
//             console.log(`Nonce: ${nonce}`);

//             const gasPrice = await web3.eth.getGasPrice();
//             console.log(`Gas Price: ${gasPrice}`);

//             const gasLimit = 21000; // Standard gas limit for ETH transfer
//             console.log(`Gas Limit: ${gasLimit}`);

//             const transaction = {
//                 'to': receiver,
//                 'value': amount,
//                 'nonce': nonce,
//                 'gas': gasLimit,
//                 'gasPrice': gasPrice,
//                 'chainId': 88817 // Chain ID for testnet
//             };

//             const signedTransaction = await account.signTransaction(transaction);
//             console.log(`Signed Transaction: ${signedTransaction.rawTransaction}`);

//             const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
//             console.log(`Transaction hash: ${receipt.transactionHash}`);
//             console.log(`Transaction was successful: ${receipt.status}`);

//             // Wait for a random time between transactions to avoid overloading the server
//             await new Promise(resolve => setTimeout(resolve, Math.random() * 5000));
//         } catch (error) {
//             console.error(`Error sending transaction: ${error.message}`);
//             console.log('Retrying transaction...');
//             await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
//         }
//     }
// }

// sendTransaction();


const { Web3 } = require('web3');
const fetch = require('node-fetch');

// Custom HTTP provider with error handling for invalid JSON responses
class CustomHttpProvider extends Web3.providers.HttpProvider {
    constructor(url) {
        super(url);
    }

    async send(payload, callback) {
        try {
            const response = await fetch(this.host, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: this.headers,
                timeout: this.timeout
            });

            if (response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const json = await response.json();
                    callback(null, json);
                } else {
                    throw new Error(`Invalid content-type: ${contentType}`);
                }
            } else {
                callback(new Error(`HTTP error: ${response.statusText}`), null);
            }
        } catch (err) {
            callback(new Error(`FetchError: ${err.message}`), null);
        }
    }
}

// Web3 instance creation with custom HTTP provider
const web3 = new Web3(new CustomHttpProvider("https://rpc-testnet.unit0.dev"));

const privateKey = "0x73287fb0408eaa115b762e0454fe238f80d283d6f272364bb2b95aba1c34e6e3";
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

const sender = account.address;
const receiver = '0x8FBDbFEf9eC457CF48eF4a3cC784556C2Ac296dA'; // Receiver's address

function getRandomAmount() {
    // Generate a random number between 0.000001 and 0.00001
    const min = 0.000001;
    const max = 0.00001;
    return (Math.random() * (max - min) + min).toFixed(8); // toFixed(8) ensures 8 decimal places
}

async function sendTransaction() {
    while (true) {
        try {
            let amountRand = getRandomAmount().toString();
            const amount = web3.utils.toWei(amountRand, 'ether'); // Amount to send in Ether

            // Get the current nonce
            const nonce = await web3.eth.getTransactionCount(sender, 'latest');
            console.log(`Nonce: ${nonce}`);

            const gasPrice = await web3.eth.getGasPrice();
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

            // Wait for the transaction to be mined
            const confirmedReceipt = await waitForTransactionReceipt(receipt.transactionHash);
            console.log(`Transaction was successful: ${confirmedReceipt.status}`);
        } catch (error) {
            console.error(`Error sending transaction: ${error.message}`);
            console.log('Retrying transaction...');
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
        }
    }
}

async function waitForTransactionReceipt(hash) {
    while (true) {
        const receipt = await web3.eth.getTransactionReceipt(hash);
        if (receipt) {
            return receipt;
        }
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds before checking again
    }
}

sendTransaction();
