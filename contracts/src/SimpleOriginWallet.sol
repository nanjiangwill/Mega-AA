// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./SimpleModule.sol";
import "./interfaces/IOriginWallet.sol";
import "hyperlane-monorepo/solidity/contracts/middleware/InterchainAccountRouter.sol";

contract SimpleOriginWallet is IOriginWallet {

    address public owner;
    address public interchainAccountRouter;

    function handleUserOp(UserOperation calldata userOp) external {
        require(validateUserOp(userOp));
        routeCalls(userOp.destinationDomain, userOp.calls);
    }

    function validateUserOp(UserOperation calldata userOp) internal view returns (bool) {
        bytes32 userOpHash = keccak256(abi.encode(
            userOp.sender,
            userOp.nonce,
            userOp.destinationDomain,
            userOp.calls,
            bytes32(0x00)
            ));
        return(SimpleModule.verifySignature(owner, userOpHash, userOp.signature));
    }

    function routeCalls(uint32 destinationDomain, Call[] calldata calls) internal {
        InterchainAccountRouter(interchainAccountRouter).dispatch(destinationDomain, calls);
    }
}