import CommonLayout from "components/common-layout";
import styles from "./index.module.scss";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Contract } from "@ethersproject/contracts";
import Button from "components/button";
import create from "zustand";

const useAccountStore = create((set) => ({
  address: "",
  loginIn: (addr: string) => set((state: any) => ({ address: addr })),
  loginOut: () => set({ address: "" }),
}));

const LandingPage = () => {
  const [isLoginInModalOpen, setIsLoginInModalOpen] = useState(false);
  const [isModuleModalOpen, setIsModuleModalOpen] = useState(false);
  const [isInteractionModalOpen, setIsInteractionModalOpen] = useState(false);

  return (
    <>
      <CommonLayout className={styles.page}>
        <div className={styles.firstView}>
          <div className={styles.heading}>Mega AA Wallet</div>
          <div className={styles.description}>...</div>
          <div className={styles.cards}>
            <Button variant="special" className={styles.card} onClick={() => setIsLoginInModalOpen(true)}>
              Create new Mega AA
            </Button>
            <Button variant="special" className={styles.card}>
              Interact
            </Button>
            <Button variant="secondary" className={styles.card}>
              Add/Delete Security Module
            </Button>
          </div>
        </div>
      </CommonLayout>
      <Modal
        size="xl"
        isOpen={isLoginInModalOpen}
        onClose={() => setIsLoginInModalOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <span style={{ fontWeight: "bold", fontSize: "23px" }}>
              Login in/ Sign up
            </span>
            <Button
              size="medium"
              variant="secondary"
              onClick={() =>
                console.log("TODO")
              }
              style={{ margin: 15 }}
            >
              Sign Up
            </Button>
            <Button
              size="medium"
              variant="secondary"
              onClick={() =>
                console.log("TODO")
              }
              style={{ margin: 15 }}
            >
              Login In
            </Button>
            <br></br>
          </ModalBody>
          <ModalFooter>
            <Button
              size="medium"
              variant="secondary"
              onClick={() => setIsLoginInModalOpen(false)}
              style={{ marginRight: 15 }}
            >
              Back
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LandingPage;
