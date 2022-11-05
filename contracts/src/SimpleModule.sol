// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./interfaces/UserOperation.sol";
import "@openzeppelin/utils/cryptography/ECDSA.sol";

library SimpleModule {
    using ECDSA for bytes32;

    function verifySignature(address owner, bytes32 userOpHash, bytes memory signatureFrag) external pure returns (bool) {
        bytes32 hash = userOpHash.toEthSignedMessageHash();
        return owner == hash.recover(signatureFrag);
    }
}