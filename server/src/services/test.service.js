const httpStatus = require('http-status');
const config = require('../config/config');
const Web3 = require('web3');
require('events').EventEmitter.defaultMaxListeners = 20; // or another number that suits your needs

const test = async () => {

	const { abi: BlacklistCheck_ABI } = require('./BlacklistCheck.json'); // Adjust the path to match where you saved the ABI

	// connect to the Ethereum node
    const web3 = new Web3('https://sepolia.infura.io/v3/8df545e71d7640ba80eee40d96bea508'); // Use your Ethereum node's URL here.

	// get the contract instance
	const contractAddress = '0x00724fb175e300358e958b6246a32f1b3501b84f'; // your contract address
	const contract = new web3.eth.Contract(BlacklistCheck_ABI, contractAddress);

	const accountAddress = '0x5f3d208f5d3b86e2f2E56027751A7Ae34420eb8f'; // Sender's address.
    const privateKey = 'b695e3b7e02a37bd36e04e63a6d23caca4a959e8e95ea880ab05ba5c3f723279'; // Replace with your private key.

	// call the contract function
	const ip = "8.8.8.8"; // replace with your IP
	const fingerprint = "example"; // replace with your fingerprint
	const userFeeInWei = web3.utils.toWei('0.000001', 'ether');

    const transaction = contract.methods.requestBlacklistStatus(ip, fingerprint);
    const [gas, gasPrice, nonce] = await Promise.all([
        transaction.estimateGas({ from: accountAddress }),
        web3.eth.getGasPrice(),
        web3.eth.getTransactionCount(accountAddress)
    ]);

    const rawTransaction = {
        from: accountAddress,
        gasPrice: web3.utils.toHex(gasPrice),
        gasLimit: web3.utils.toHex(gas),
        to: contractAddress,
        data: transaction.encodeABI(),
        nonce: web3.utils.toHex(nonce),
		value: web3.utils.toHex(userFeeInWei) // add user fee to the transaction
    };

	// get accounts
    // Create an account object from the private key.
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);

    // Sign the transaction.
    const signedTransaction = await account.signTransaction(rawTransaction);
    
	
    // Send the signed transaction.
    web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
        .then(receipt => {
            console.log(receipt);
        })
        .catch(error => {
        	console.log('error')
            console.error(error);
			const decodedMessage = web3.eth.abi.decodeParameters(['string'], error.data.substring(10)); // Skip the first 10 characters.
        	console.error(`Decoded message: ${decodedMessage[0]}`);
        });

}

const testAddToList = async () => {
    let ret = {};
    const web3 = new Web3('https://sepolia.infura.io/v3/8df545e71d7640ba80eee40d96bea508'); // Use your Ethereum node's URL here.

    // ABI and address of the deployed contract.
	const abi = [
				    {
				        "constant": false,
				        "inputs": [
				            {
				                "name": "fingerprintHash",
				                "type": "bytes32"
				            },
				            {
				                "name": "ipAddress",
				                "type": "string"
				            }
				        ],
				        "name": "addToBlacklist",
				        "outputs": [],
				        "payable": false,
				        "stateMutability": "nonpayable",
				        "type": "function"
				    },
				    {
				        "constant": true,
				        "inputs": [
				            {
				                "name": "fingerprintHash",
				                "type": "bytes32"
				            },
				            {
				                "name": "ipAddress",
				                "type": "string"
				            }
				        ],
				        "name": "getBlacklistPair",
				        "outputs": [
				            {
				                "name": "",
				                "type": "bytes32"
				            },
				            {
				                "name": "",
				                "type": "string"
				            }
				        ],
				        "payable": false,
				        "stateMutability": "view",
				        "type": "function"
				    }
				]; // Contract ABI

    const contractAddress = '0x77f173fd0cbbcce0fd7ef227c688a516480f4318'; // The address where the contract was deployed.
    const accountAddress = '0x5f3d208f5d3b86e2f2E56027751A7Ae34420eb8f'; // Sender's address.
    const privateKey = 'b695e3b7e02a37bd36e04e63a6d23caca4a959e8e95ea880ab05ba5c3f723279'; // Replace with your private key.

    // Create the contract instance.
    const BlackedIPs = new web3.eth.Contract(abi, contractAddress);

    // Call addToBlacklist.
    const fingerprintHash = web3.utils.sha3('example fingerprint'); // Use actual fingerprint here.
    const ipAddress = '192.0.2.0'; // Use actual IP address here.

    // Create a transaction object.
    const transaction = BlackedIPs.methods.addToBlacklist(fingerprintHash, ipAddress);

    // Estimate gas, get gas price and nonce for account.
    const [gas, gasPrice, nonce] = await Promise.all([
        transaction.estimateGas({ from: accountAddress }),
        web3.eth.getGasPrice(),
        web3.eth.getTransactionCount(accountAddress)
    ]);

    // Create a raw transaction object.
    const rawTransaction = {
        from: accountAddress,
        gasPrice: web3.utils.toHex(gasPrice),
        gasLimit: web3.utils.toHex(gas),
        to: contractAddress,
        data: transaction.encodeABI(),
        nonce: web3.utils.toHex(nonce)
    };

    // Create an account object from the private key.
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);

    // Sign the transaction.
    const signedTransaction = await account.signTransaction(rawTransaction);

    // Send the signed transaction.
    web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
        .then(receipt => {
            console.log(receipt);
        })
        .catch(error => {
            console.error(error);
        });

    return ret;
}

module.exports = {
  test
};
