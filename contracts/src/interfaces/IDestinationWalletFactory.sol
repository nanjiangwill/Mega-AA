// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

interface IDestinationWalletFactory {
    function createWallet() external returns (address);
}