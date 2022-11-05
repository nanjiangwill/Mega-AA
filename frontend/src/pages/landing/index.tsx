import CommonLayout from "components/common-layout";
import styles from "./index.module.scss";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAccount, useSigner, useProvider } from "wagmi";
import { Contract } from "@ethersproject/contracts";

const LandingPage = () => {

  const provider = useProvider();
  const toast = useToast();
  const { data: signer } = useSigner();
  const { address } = useAccount();

  return (
    <CommonLayout className={styles.page}>
      <div className={styles.firstView}>
        <div className={styles.heading}>Mega AA Wallet</div>
        <div className={styles.description}>...</div>
        <div className={styles.cards}>
          ....
        </div>
      </div>
    </CommonLayout>
  );
};

export default LandingPage;
