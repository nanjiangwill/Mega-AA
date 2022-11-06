// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;
import "./ImmutableInclusionVerifier.sol";

contract OTP {
    bytes32 public merkleRoot;
    mapping(bytes32 => bool) nullifiers;

    constructor(bytes32 _merkleRoot){
        merkleRoot = _merkleroot;
    }

    function verifySignature(bytes32 note, bytes32[] memory proof) external pure returns (bool) {
        require(!nullifiers[keccak256(note)], "OTP already used.");
        if(ImmutableInclusionVerifier.verifyMerkleProof(note, proof, merkleRoot)){
            nullifiers[keccak256(note)] = true;
            return true;
        }
        return false;
    }
}