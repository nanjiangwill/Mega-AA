// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./SimpleModule.sol";
import "./interfaces/IOriginWallet.sol";
import "hyperlane-monorepo/solidity/contracts/middleware/InterchainAccountRouter.sol";

contract SimpleOriginWallet is IOriginWallet {

    address public immutable owner;
    address public immutable interchainAccountRouter;

    constructor(address _owner, address _interchainAccountRouter) {
        owner = _owner;
        interchainAccountRouter = _interchainAccountRouter;
    }

    function handleUserOp(UserOperation calldata userOp, bytes32 userOpHash) external {
        //require(validateUserOp(userOp, userOpHash));
        routeCalls(uint32(userOp.destinationDomain), userOp.calls);
    }

    function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash) internal view returns (bool) {
        return(SimpleModule.verifySignature(owner, userOpHash, userOp.signature));
    }

    function routeCalls(uint32 destinationDomain, Call[] calldata calls) internal {
        InterchainAccountRouter(interchainAccountRouter).dispatch(destinationDomain, calls);
    }
}