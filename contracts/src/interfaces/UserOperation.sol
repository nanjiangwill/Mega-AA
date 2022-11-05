// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

struct Call {
    address to;
    bytes callData;
}

struct UserOperation {
    address sender;
    uint256 nonce;
    uint32 destinationDomain;
    Call[] calls;
    bytes signature;
}