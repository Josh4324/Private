// Layout of Contract:
// version
// imports
// errors
// interfaces, libraries, contracts
// Type declarations
// State variables
// Events
// Modifiers
// Functions

// Layout of Functions:
// constructor
// receive function (if exists)
// fallback function (if exists)
// external
// public
// internal
// private
// view & pure functions

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

/**
 * @title A Private Variable Contract
 * @author Joshua Adesanya
 * @notice This contract is for creating a single private state variable and develop functions to modify and retrieve this value.
 */
contract Private {
    // Errors
    error Private__NumberAlreadyExists();

    // State Variables
    uint256 private number;

    // Events
    event numberUpdated(uint256 indexed number);

    // Mappings

    // Modifiers

    // Constructor

    constructor() {}

    // External Functions

    /*
     * @notice Update the number private variable
     *  @param num
     */
    function updateNumber(uint256 num) external {
        if (number == num) {
            revert Private__NumberAlreadyExists();
        }

        number = num;
        emit numberUpdated(num);
    }

    // Public Functions
    /*
     *  @notice get Number;
     */
    function getNumber() public view returns (uint256) {
        return number;
    }
}
