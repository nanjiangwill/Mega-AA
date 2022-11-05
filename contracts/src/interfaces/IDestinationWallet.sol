// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/token/ERC721/IERC721Receiver.sol";

interface IDestinationWallet is IERC721Receiver {
    function execute(address to, uint256 value, bytes calldata func) external payable; 
}