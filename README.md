# Swisstronik Developer Challenge 1

## Developer Challenge:

Create a smart contract with a single private state variable (string or uint) and develop functions to modify and retrieve this value. Deploy the contract to the Mumbai testnet and Swisstronik testnet, and write a script to access this variable using the RPC method eth_getStorageAt() on both networks. The Contract address of the Deployed address on Mumbai and Swisstronik should be documented in the Read.me file of the GitHub Repo.

### Contract Address (Mumbai)

0xc13Bc44BE679c8EEC00dd556770C8ACc3E6E1530 <br/>

https://mumbai.polygonscan.com/address/0xc13Bc44BE679c8EEC00dd556770C8ACc3E6E1530

### Contract Address (Swisstronik)

0xE82475F07491fBACCa9E4362dD32C362a878bbAC <br/>

https://explorer-evm.testnet.swisstronik.com/address/0xE82475F07491fBACCa9E4362dD32C362a878bbAC/transactions#address-tabs

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
