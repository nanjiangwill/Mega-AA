// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./UserOperation.sol";

interface ISecurityModule {
    function verifySignature(UserOperation calldata userOp) external returns (bool);
}