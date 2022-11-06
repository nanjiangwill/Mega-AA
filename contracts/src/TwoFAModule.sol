// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./interfaces/UserOperation.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

library TwoFAModule {
    using ECDSA for bytes32;

    function verifySignature(address owner, address friend, bytes32 userOpHash, bytes calldata signatureFrag) external pure returns (bool) {
        bytes32 hash = userOpHash.toEthSignedMessageHash();
        require(owner == hash.recover(signatureFrag[0:65]));
        require(friend == hash.recover(signatureFrag[0:129]));
        return true;
    }
}