import type {
    BigNumberish, BytesLike
} from 'ethers';
import { defaultAbiCoder, keccak256 } from 'ethers/lib/utils';

import { Signer } from '@ethersproject/abstract-signer';

export type Call = {
    to: string;
    data: BytesLike;
}

export type UserOperationStruct = {
    sender: string;
    nonce: BigNumberish;
    destinationDomain: BigNumberish;
    calls: Call[];
    signature: BytesLike;
}

export function packUserOp (op: UserOperationStruct): string {
    const userOpType = {
        components: [
            {
                type: 'address',
                name: 'sender'
            },
            {
                type: 'uint256',
                name: 'nonce'
            },
            {
                type: 'uint256',
                name: 'destinationDomain'
            },
            {
                type: 'tuple(address, bytes)[]',
                name: 'calls'
            },
            {
                type: 'bytes',
                name: 'signature'
            }
        ],
        name: 'userOp',
        type: 'tuple'
    };

    let encoded = defaultAbiCoder.encode([userOpType as any], [{
        ...op,
        signature: '0x'
    }]);
    encoded = '0x' + encoded.slice(66, encoded.length - 64);
    return encoded;
}

export function getUserOpHash (op: UserOperationStruct, chainId: number): string {
    const hash = keccak256(packUserOp(op));
    const enc = defaultAbiCoder.encode(
        ['bytes32', 'uint256'],
        [hash, chainId]
    );
    return keccak256(enc);
}

// chainId is the chainId of the origin chain (in our case, Mumbai)
// the Signer class is abstract and cannot be instantiated directly
// use a concrete sub-class of Signer like Wallet or JsonRpcSigner
// the output of this function goes into the signature field of the userOp
// (before signing the userOp, the signature field is '0x')
export function signUserOp(signer: Signer, userOp: UserOperationStruct, chainId: number): Promise<string> {
    const message = getUserOpHash(userOp, chainId);
    return signer.signMessage(message);
}