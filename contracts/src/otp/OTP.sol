// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract OTP {
    bytes32 public merkleRoot;
    mapping(bytes32 => bool) nullifiers;

    constructor(bytes32 _merkleRoot){
        merkleRoot = _merkleRoot;
    }

    function verifySignature(bytes memory note, bytes32[] memory proof) external returns (bool) {
        require(!nullifiers[keccak256(note)], "OTP already used.");
        if(verifyMerkleProof(bytes32(note), proof, merkleRoot)){
            nullifiers[keccak256(note)] = true;
            return true;
        }
        return false;
    }

    function verifyMerkleProof(bytes32 leaf, bytes32[] memory proof, bytes32 _merkleRoot)
        public
        pure
        returns (bool)
    {
        bytes32 computedHash = leaf;
        for (uint256 i = 0; i < proof.length; i++) {
            computedHash = hashPair(computedHash, proof[i]);
        }

        return computedHash == _merkleRoot;
    }

    function hashPair(bytes32 a, bytes32 b) private pure returns (bytes32) {
        return a < b ? efficientHash(a, b) : efficientHash(b, a);
    }

    function efficientHash(bytes32 a, bytes32 b)
        private
        pure
        returns (bytes32 value)
    {
        assembly {
            mstore(0x00, a)
            mstore(0x20, b)
            value := keccak256(0x00, 0x40)
        }
    }
}