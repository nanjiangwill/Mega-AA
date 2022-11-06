// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

library ImmutableInclusionVerifier {
    bytes32 public immutable merkleRoot;

    constructor(bytes32 merkleRoot_) {
        merkleRoot = merkleRoot_;
    }

    function verifyMerkleProof(bytes32 leaf, bytes32[] memory proof, bytes32 merkleRoot)
        public
        view
        returns (bool)
    {
        bytes32 computedHash = leaf;
        for (uint256 i = 0; i < proof.length; i++) {
            computedHash = hashPair(computedHash, proof[i]);
        }

        return computedHash == merkleRoot;
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