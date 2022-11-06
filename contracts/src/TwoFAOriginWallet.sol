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

    function handleUserOp(UserOperation calldata userOp, bytes32 userOpHash) external {
        require(validateUserOp(userOp, userOpHash));
        routeCalls(userOp.destinationDomain, userOp.calls);
    }

    function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash) internal view returns (bool) {
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