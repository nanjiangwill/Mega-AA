// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hyperlane-monorepo/solidity/contracts/OwnableMulticall.sol";

struct UserOperation {
    address sender;
    uint256 nonce;
    uint32 destinationDomain;
    Call[] calls;
    bytes signature;
}