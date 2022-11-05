// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./DestinationWallet.sol";
import "./interfaces/IDestinationWalletFactory.sol";

contract DestinationWalletFactory is IDestinationWalletFactory {
    address public immutable interchainAccount;
    constructor(address _interchainAccount) {
        interchainAccount = _interchainAccount;
    }

    function createWallet() external returns (address) {
        require(msg.sender == interchainAccount);
        return address(new DestinationWallet(interchainAccount));
    }
}