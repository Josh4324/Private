const { Web3 } = require("web3");

// Create a Web3 instance connected to the Mumbai testnet

const web3 = new Web3("https://json-rpc.testnet.swisstronik.com");

// Replace with your contract address and the slot number
const contractAddress = "0xE82475F07491fBACCa9E4362dD32C362a878bbAC";
const slotNumber = "0x0"; // Example: '0x0' for the first slot

// Specify the block number (or 'latest' for the latest block)
const blockNumber = "latest";

web3.eth // Use eth_getStorageAt to retrieve the variable from the contract's storage
  .getStorageAt(contractAddress, slotNumber, blockNumber)
  .then((result) => {
    console.log("Value from storage:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
