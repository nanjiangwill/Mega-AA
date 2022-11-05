import CommonLayout from "components/common-layout";
import styles from "./index.module.scss";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAccount, useSigner, useProvider } from "wagmi";
import { Contract } from "@ethersproject/contracts";
import Button from "components/button";

const LandingPage = () => {
  return (
    <CommonLayout className={styles.page}>
      <div className={styles.firstView}>
        <div className={styles.heading}>Mega AA Wallet</div>
        <div className={styles.description}>...</div>
        <div className={styles.cards}>
          <Button variant="special" className={styles.card}>Create new Mega AA</Button>
          <Button variant="special" className={styles.card}>
            Interact
          </Button>
          <Button variant="secondary"  className={styles.card}>Add Security Module</Button>
          <Button variant="secondary" className={styles.card}>
            Delete Security Module
          </Button>
        </div>
      </div>
    </CommonLayout>
  );
};

export default LandingPage;
