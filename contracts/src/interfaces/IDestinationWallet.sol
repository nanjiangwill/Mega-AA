// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";

interface IDestinationWallet is IERC721Receiver, IERC1155Receiver {
    function execute(address to, uint256 value, bytes calldata func) external; 

    fallback() external;
}