import { Contract } from "@ethersproject/contracts";
import Swal from "sweetalert2";

const createNewAccount = async (name:string, password: string, toast:any) => {
    // try {
    //     const walletContract = new Contract(
    //         "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    //         wallet.abi,
    //         providers.getSigner())
    //     const tx = await walletContract.createWallet(name, password)
    //     const hash = tx.hash;
    //     const hashUrl = `<a href=https://goerli.arbiscan.io/tx/${hash}>Check Arbitrum Testnet Info (Click with CMD)</a>`;
    //     Swal.fire({
    //         title: "Waiting for the result from the blockchain",
    //         footer: hashUrl,
    //     });
    //     Swal.showLoading();
    //     const receipt = await tx.wait();
    //     Swal.hideLoading();

    //     if (receipt.status == 1) {
    //         let tokenId;
    //         if (currAddress === signerAddress) {
    //         tokenId = receipt.events[0].args.tokenId._hex;
    //         } else {
    //         const topicLength = receipt.logs[0].topics.length;
    //         tokenId = abiCoder.decode(
    //             ["address"],
    //             receipt.events[0].topics[topicLength - 1]
    //         );
    //         }
    //         Swal.update({
    //         title: "Success!",
    //         html: `Your Wallet is ready! <br> NFT Wallet Address: ${currAddress}`,
    //         icon: "success",
    //         showConfirmButton: false,
    //         });
    //     } else {
    //         Swal.close();
    //         throw new Error("Mint Failed during transaction");
    //     }
    // } catch (error: any) {
    //     toast({
    //       title: "mint NFT/NFT Wallet failed",
    //       description: error.message,
    //       status: "error",
    //       duration: 9000,
    //       isClosable: true,
    //     });
    //   }

}

export default createNewAccount