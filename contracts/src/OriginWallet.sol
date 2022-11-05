// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./interfaces/IOriginWallet.sol";


contract OriginWallet is IOriginWallet {
    address constant public InterchainAccountRouterContract = 0xffD17672d47E7bB6192d5dBc12A096e00D1a206F;
    
    function handleUserOp(UserOperation calldata userOp) external override {
        _postVerificationExec(userOp);
    }

    // this function can be deleted and the code can be moved to handleUserOp
    function _postVerificationExec(UserOperation calldata userOp) private returns (bool success) {
        (bool success, bytes memory data) = InterchainAccountRouterContract.call(abi.encodeWithSignature("dispatch(uint256, Call[])", userOp.destinationDomain, userOp.calls));
    }
}   