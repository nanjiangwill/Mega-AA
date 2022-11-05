// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./interfaces/IDestinationWallet.sol";

contract DestinationWallet is IDestinationWallet {
    address public immutable interchainAccount;

    constructor(address _interchainAccount) {
        interchainAccount = _interchainAccount;
    }

    function executeCall(address to, uint256 value, bytes calldata func) external {
        require(msg.sender == interchainAccount);
        (bool success, bytes memory result) = to.call{value: value}(func);
        if (!success) {
            assembly {
                revert(add(result, 32), mload(result))
            }
        }
    } 

    fallback() external {

    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes memory
    ) 
    public virtual override returns (bytes4)
    {
        return this.onERC721Received.selector;
    }

    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address,
        address,
        uint256[] memory,
        uint256[] memory,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }

    function supportsInterface(bytes4 interfaceId) external view returns (bool) {
        return true;
    }
}