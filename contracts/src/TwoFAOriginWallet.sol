// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./SimpleModule.sol";
import "./TwoFAModule.sol";
import "./interfaces/IOriginWallet.sol";
import "hyperlane-monorepo/solidity/contracts/middleware/InterchainAccountRouter.sol";

contract TwoFAOriginWallet is IOriginWallet {

    address public immutable owner;
    address public friend;
    address public immutable interchainAccountRouter;

    bool public twoFAEnabled;

    constructor(address _owner, address _interchainAccountRouter, bool _twoFAEnabled) {
        owner = _owner;
        interchainAccountRouter = _interchainAccountRouter;
        twoFAEnabled = _twoFAEnabled;
    }

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
        if(!twoFAEnabled) {
            require(userOp.signature.length == 65, "Invalid signature length");
            return(SimpleModule.verifySignature(owner, userOpHash, userOp.signature));
        }
        else {
            require(userOp.signature.length == 130, "Invalid signature length");
            return(TwoFAModule.verifySignature(owner, friend, userOpHash, userOp.signature));
        }
    }

    function routeCalls(uint32 destinationDomain, Call[] calldata calls) internal {
        InterchainAccountRouter(interchainAccountRouter).dispatch(destinationDomain, calls);
    }
}