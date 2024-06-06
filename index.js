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









//  const { Web3 } = require('web3');

// // // Web3 instance creation
// const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-testnet.unit0.dev"));

//  const privateKey = "0x73287fb0408eaa115b762e0454fe238f80d283d6f272364bb2b95aba1c34e6e3";
//  const account = web3.eth.accounts.privateKeyToAccount(privateKey);

//  const sender = account.address;
//  const receiver = '0x74f7517F0b2976263d7cDe9Fb8A65E3f31E299d7'; 

// function getRandomAmount() {
//     const min = 0.000001;
//     const max = 0.00001;
//     return (Math.random() * (max - min) + min).toFixed(8);
// }
// async function sendTransaction() {
//     while (true) {
        
//         try {
//             let amountRand = getRandomAmount().toString();
//             const amount = web3.utils.toWei(amountRand, 'ether');
//             const nonce = await web3.eth.getTransactionCount(sender, 'latest');
//             console.log(`Nonce: ${nonce}`);

//             const gasPrice = await web3.eth.getGasPrice();
//             console.log(`Gas Price: ${gasPrice}`);

//             const gasLimit = 21000;
//             console.log(`Gas Limit: ${gasLimit}`);

//             const transaction = {
//                 'to': receiver,
//                 'value': amount,
//                 'nonce': nonce,
//                 'gas': gasLimit,
//                 'gasPrice': gasPrice,
//                 'chainId': 88817 
//             };

//             const signedTransaction = await account.signTransaction(transaction);
//             console.log(`Signed Transaction: ${signedTransaction.rawTransaction}`);

//             const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
//             console.log(`Transaction hash: ${receipt.transactionHash}`);
//             console.log(`Transaction was successful: ${receipt.status}`);

       
//         } catch (error) {
//             console.error(`Error sending transaction: ${error.message}`);
//             console.log('Retrying transaction...');
//         }
//     }
// }

// sendTransaction();


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
// const receiver = '0x74f7517F0b2976263d7cDe9Fb8A65E3f31E299d7'; // Receiver's address

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
// let nonce = 330;
// const sender = account.address;

// const receiver = '0x74f7517F0b2976263d7cDe9Fb8A65E3f31E299d7'; // Receiver's address

// function getRandomAmount() {
//     // Generate a random number between 0.000001 and 0.00001
//     const min = 0.000001;
//     const max = 0.00001;
//     return (Math.random() * (max - min) + min).toFixed(8); // toFixed(8) ensures 8 decimal places
// }

// async function sendTransaction() {
//     try {
//         let amountRand = getRandomAmount().toString();
//         const amount = web3.utils.toWei(amountRand, 'ether'); // Amount to send in Ether

//         // Get the current nonce
       
//         console.log(`Nonce: ${nonce}`);
        
//         const gasPrice = await web3.eth.getGasPrice();

//         const gasLimit = 21000; // Standard gas limit for ETH transfer
//         console.log(`Gas Limit: ${gasLimit}`);

//         const transaction = {
//             'to': receiver,
//             'value': amount,
//             'nonce': nonce,
//             'gas': gasLimit,
//             'gasPrice': gasPrice,
//             'chainId': 88817 // Chain ID for testnet
//         };

//         const signedTransaction = await account.signTransaction(transaction);
//         console.log(`Signed Transaction: ${signedTransaction.rawTransaction}`);

//         const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
//         console.log(`Transaction hash: ${receipt.transactionHash}`);
//         console.log(`Transaction was successful: ${receipt.status}`);
//         nonce+=1;
//         return receipt;
//     } catch (error) {
//         nonce+=1;
//         console.error(`Error sending transaction: ${error.message}`);
//         throw error; // Re-throw error to handle it in the calling function
//     }
// }

// async function main() {
//     while (true) {
//         try {
//             await sendTransaction();
//         } catch (error) {
//             console.log('Retrying transaction...');
//         }
//         // Wait for a random time between transactions to avoid overloading the server
//         await new Promise(resolve => setTimeout(resolve, Math.random() * 5000));
//     }
// }

// main();


// const { Web3 } = require('web3');

// // Web3 instance creation with custom HTTP provider
// const web3 = new Web3("https://rpc-testnet.unit0.dev");

// const privateKey = "0x73287fb0408eaa115b762e0454fe238f80d283d6f272364bb2b95aba1c34e6e3";
// const account = web3.eth.accounts.privateKeyToAccount(privateKey);
// const sender = account.address;
// const receiver = '0x74f7517F0b2976263d7cDe9Fb8A65E3f31E299d7'; // Receiver's address

// function getRandomAmount() {
//     // Generate a random number between 0.000001 and 0.00001
//     const min = 0.000001;
//     const max = 0.000003;
//     return (Math.random() * (max - min) + min).toFixed(8); // toFixed(8) ensures 8 decimal places
// }

// async function sendTransaction() {
//     try {
//         let amountRand = getRandomAmount().toString();
//         const amount = web3.utils.toWei(amountRand, 'ether'); // Amount to send in Ether
        
//         const nonce = await web3.eth.getTransactionCount(sender, 'latest');
//         console.log(`Nonce: ${nonce}`);
        
//         const gasPrice = await web3.eth.getGasPrice();

//         const gasLimit = 21000; // Standard gas limit for ETH transfer
//         console.log(`Gas Limit: ${gasLimit}`);

//         const transaction = {
//             'to': receiver,
//             'value': amount,
//             'nonce': nonce,
//             'gas': gasLimit,
//             'gasPrice': gasPrice,
//             'chainId': 88817 // Chain ID for testnet
//         };

//         const signedTransaction = await account.signTransaction(transaction);
//         console.log(`Signed Transaction: ${signedTransaction.rawTransaction}`);

//         const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
//         console.log(`Transaction hash: ${receipt.transactionHash}`);
//         console.log(`Transaction was successful: ${receipt.status}`);
       
//         return receipt;
//     } catch (error) {
//         console.error(`Error sending transaction: ${error.message}`);
//     }
// }

// async function main() {
//     while (true) {
//         try {
//             await sendTransaction();
//         } catch (error) {
//             console.log('Retrying transaction...');
//         }
//         await new Promise(resolve => setTimeout(resolve, Math.random() * 5000));
//     }
// }

// main();




// const { Web3 } = require('web3');

// // Web3 instance creation with custom HTTP provider
// const web3 = new Web3("https://rpc-testnet.unit0.dev");

// const privateKey = "0x73287fb0408eaa115b762e0454fe238f80d283d6f272364bb2b95aba1c34e6e3";
// const account = web3.eth.accounts.privateKeyToAccount(privateKey);
// const sender = account.address;
// const receiver = '0x74f7517F0b2976263d7cDe9Fb8A65E3f31E299d7'; // Receiver's address

// function getRandomAmount() {
//     // Generate a random number between 0.000001 and 0.00001
//     const min = 0.000001;
//     const max = 0.000003;
//     return (Math.random() * (max - min) + min).toFixed(8); // toFixed(8) ensures 8 decimal places
// }

// async function sendTransaction() {
//     try {
//         let amountRand = getRandomAmount().toString();
//         const amount = web3.utils.toWei(amountRand, 'ether'); // Amount to send in Ether
        
//         let nonce;
//         try {
//             nonce = await web3.eth.getTransactionCount(sender, 'latest');
//         } catch (fetchError) {
//             console.error(`Error fetching nonce: ${fetchError.message}`);
//             throw fetchError;
//         }
//         console.log(`Nonce: ${nonce}`);
        
//         let gasPrice;
//         try {
//             gasPrice = await web3.eth.getGasPrice();
//         } catch (fetchError) {
//             console.error(`Error fetching gas price: ${fetchError.message}`);
//             throw fetchError;
//         }

//         const gasLimit = 21000; // Standard gas limit for ETH transfer
//         console.log(`Gas Limit: ${gasLimit}`);

//         const transaction = {
//             'to': receiver,
//             'value': amount,
//             'nonce': nonce,
//             'gas': gasLimit,
//             'gasPrice': gasPrice,
//             'chainId': 88817 // Chain ID for testnet
//         };

//         const signedTransaction = await account.signTransaction(transaction);
//         console.log(`Signed Transaction: ${signedTransaction.rawTransaction}`);

//         const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
//         console.log(`Transaction hash: ${receipt.transactionHash}`);
//         console.log(`Transaction was successful: ${receipt.status}`);
       
//         return receipt;
//     } catch (error) {
//         if (error.message.includes('Nonce too low')) {
//             console.error('Nonce too low, retrying with a new nonce...');
//             return sendTransaction();
//         } else if (error.message.includes('invalid json response body')) {
//             console.error('Invalid JSON response, retrying transaction...');
//             throw new Error('Retry due to invalid JSON response');
//         } else {
//             console.error(`Error sending transaction: ${error.message}`);
//             throw error; // Re-throw error to handle it in the calling function
//         }
//     }
// }

// async function main() {
//     while (true) {
//         try {
//             await sendTransaction();
//         } catch (error) {
//             console.log('Retrying transaction...');
//         }
//         // Wait for a random time between transactions to avoid overloading the server
//         await new Promise(resolve => setTimeout(resolve, Math.random() * 5000));
//     }
// }

// main();


// const { Web3 } = require('web3');

// // Web3 instance creation with custom HTTP provider
// const web3 = new Web3("https://rpc-testnet.unit0.dev");

// const privateKey = "0x73287fb0408eaa115b762e0454fe238f80d283d6f272364bb2b95aba1c34e6e3";
// const account = web3.eth.accounts.privateKeyToAccount(privateKey);
// const sender = account.address;
// const receiver = '0x74f7517F0b2976263d7cDe9Fb8A65E3f31E299d7'; // Receiver's address

// function getRandomAmount() {
//     // Generate a random number between 0.000001 and 0.00001
//     const min = 0.000001;
//     const max = 0.000003;
//     return (Math.random() * (max - min) + min).toFixed(8); // toFixed(8) ensures 8 decimal places
// }

// async function sendTransaction(retryCount = 0) {
//     const maxRetries = 5;
//     const backoffDelay = 1000 * Math.pow(2, retryCount); // Exponential backoff

//     try {
//         let amountRand = getRandomAmount().toString();
//         const amount = web3.utils.toWei(amountRand, 'ether'); // Amount to send in Ether
        
//         let nonce;
//         try {
//             nonce = await web3.eth.getTransactionCount(sender, 'latest');
//         } catch (fetchError) {
//             console.error(`Error fetching nonce: ${fetchError.message}`);
//             throw fetchError;
//         }
//         console.log(`Nonce: ${nonce}`);
        
//         let gasPrice;
//         try {
//             gasPrice = await web3.eth.getGasPrice();
//         } catch (fetchError) {
//             console.error(`Error fetching gas price: ${fetchError.message}`);
//             throw fetchError;
//         }

//         const gasLimit = 21000; // Standard gas limit for ETH transfer
//         console.log(`Gas Limit: ${gasLimit}`);

//         const transaction = {
//             'to': receiver,
//             'value': amount,
//             'nonce': nonce,
//             'gas': gasLimit,
//             'gasPrice': gasPrice,
//             'chainId': 88817 // Chain ID for testnet
//         };

//         const signedTransaction = await account.signTransaction(transaction);
//         console.log(`Signed Transaction: ${signedTransaction.rawTransaction}`);

//         const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
//         console.log(`Transaction hash: ${receipt.transactionHash}`);
//         console.log(`Transaction was successful: ${receipt.status}`);
       
//         return receipt;
//     } catch (error) {
//         if (error.message.includes('Nonce too low')) {
//             console.error('Nonce too low, retrying with a new nonce...');
//             return sendTransaction(retryCount + 1);
//         } else if (error.message.includes('invalid json response body')) {
//             console.error('Invalid JSON response, retrying transaction...');
//             if (retryCount < maxRetries) {
//                 console.log(`Retrying in ${backoffDelay}ms...`);
//                 await new Promise(resolve => setTimeout(resolve, backoffDelay));
//                 return sendTransaction(retryCount + 1);
//             } else {
//                 throw new Error('Max retries reached due to invalid JSON response');
//             }
//         } else {
//             console.error(`Error sending transaction: ${error.message}`);
//             throw error; // Re-throw error to handle it in the calling function
//         }
//     }
// }

// async function main() {
//     while (true) {
//         try {
//             await sendTransaction();
//         } catch (error) {
//             console.log('Retrying transaction...');
//         }
//         // Wait for a random time between transactions to avoid overloading the server
//         await new Promise(resolve => setTimeout(resolve, Math.random() * 5000));
//     }
// }

// main();


// const { Web3 } = require('web3');

// // Web3 instance creation with custom HTTP provider
// const web3 = new Web3("https://rpc-testnet.unit0.dev");

// const privateKey = "0x73287fb0408eaa115b762e0454fe238f80d283d6f272364bb2b95aba1c34e6e3";
// const account = web3.eth.accounts.privateKeyToAccount(privateKey);
// const sender = account.address;
// const receiver = '0x74f7517F0b2976263d7cDe9Fb8A65E3f31E299d7'; // Receiver's address

// function getRandomAmount() {
//     // Generate a random number between 0.000001 and 0.00001
//     const min = 0.000001;
//     const max = 0.000003;
//     return (Math.random() * (max - min) + min).toFixed(8); // toFixed(8) ensures 8 decimal places
// }

// async function fetchWithRetry(fetchFn, retries = 5, delay = 1000) {
//     for (let i = 0; i < retries; i++) {
//         try {
//             return await fetchFn();
//         } catch (error) {
//             if (i < retries - 1) {
//                 console.error(`Fetch error: ${error.message}. Retrying in ${delay}ms...`);
//                 await new Promise(resolve => setTimeout(resolve, delay));
//                 delay *= 2; // Exponential backoff
//             } else {
//                 throw error;
//             }
//         }
//     }
// }

// async function sendTransaction() {
//     try {
//         let amountRand = getRandomAmount().toString();
//         const amount = web3.utils.toWei(amountRand, 'ether'); // Amount to send in Ether

//         const nonce = await fetchWithRetry(() => web3.eth.getTransactionCount(sender, 'latest'));
//         console.log(`Nonce: ${nonce}`);

//         const gasPrice = web3.utils.toWei('0.0000000025', 'ether'); // Set gas price to 2.5 Gwei
//         console.log(`Gas Price: ${gasPrice}`);

//         const gasLimit = 21000; // Standard gas limit for ETH transfer
//         console.log(`Gas Limit: ${gasLimit}`);

//         const transaction = {
//             'to': receiver,
//             'value': amount,
//             'nonce': nonce,
//             'gas': gasLimit,
//             'gasPrice': gasPrice,
//             'chainId': 88817 // Chain ID for testnet
//         };

//         const signedTransaction = await account.signTransaction(transaction);
//         console.log(`Signed Transaction: ${signedTransaction.rawTransaction}`);

//         const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
//         console.log(`Transaction hash: ${receipt.transactionHash}`);
//         console.log(`Transaction was successful: ${receipt.status}`);

//         return receipt;
//     } catch (error) {
//          return sendTransaction();
       
//     }
// }

// async function main() {
//     while (true) {
//         try {
//             await sendTransaction();
//         } catch (error) {
//             await sendTransaction();
//         }
//         // Wait for a random time between 10 and 20 seconds between transactions to avoid overloading the server
//         const delay = getRandomDelay();
//         console.log(`Waiting for ${delay}ms before next transaction...`);
//         await new Promise(resolve => setTimeout(resolve, delay));
//     }
// }

// main();

const { Web3 } = require('web3');

// Web3 instance creation with custom HTTP provider
const web3 = new Web3("https://rpc-testnet.unit0.dev");

const privateKey = "0x73287fb0408eaa115b762e0454fe238f80d283d6f272364bb2b95aba1c34e6e3";
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
const sender = account.address;
const receiver = '0x74f7517F0b2976263d7cDe9Fb8A65E3f31E299d7'; // Receiver's address
let nonce;

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

async function sendTransaction(gasPriceGwei = 2.5) {
    let amountRand = getRandomAmount().toString();
    const amount = web3.utils.toWei(amountRand, 'ether'); // Amount to send in Ether

    console.log(`Nonce: ${nonce}`);

    const gasPrice = web3.utils.toWei(gasPriceGwei.toString(), 'gwei'); // Set gas price to specified Gwei
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

    try {
        const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
        console.log(`Transaction hash: ${receipt.transactionHash}`);
        console.log(`Transaction was successful: ${receipt.status}`);
    } catch (error) {
        console.error(`Error sending transaction: ${error.message}`);
    } finally {
        // Her durumda nonce değerini artır
        nonce++;
    }
}

async function main() {
    nonce = await fetchWithRetry(() => web3.eth.getTransactionCount(sender, 'latest'));

    while (true) {
        try {
            await sendTransaction();
        } catch (error) {
            console.error(`Transaction error: ${error.message}`);
        }
        // Wait for a random time between 10 and 20 seconds between transactions to avoid overloading the server
        const delay = getRandomDelay();
        console.log(`Waiting for ${delay}ms before next transaction...`);
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

main();
