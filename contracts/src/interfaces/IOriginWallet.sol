// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./UserOperation.sol";

interface IOriginWallet {
    function handleUserOp(UserOperation calldata userOp) external;
}