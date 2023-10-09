const { Web3 } = require("web3");

// Create a Web3 instance connected to the Mumbai testnet

const web3 = new Web3(
  "https://polygon-mumbai.g.alchemy.com/v2/MkGeFSu2J-NB5e16OizxZSPtBRiRO8Rr"
);

// Replace with your contract address and the slot number
const contractAddress = "0xc13Bc44BE679c8EEC00dd556770C8ACc3E6E1530";
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
