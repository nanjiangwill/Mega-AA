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
import Card from "components/card";
import ethereumLogo from "assets/ethereum.png";
import polygonLogo from "assets/polygon.png";
import arbitrumLogo from "assets/arbitrum.svg";
import optimismLogo from "assets/optimism.svg";
import celoLogo from "assets/celo.png";
import avalancheLogo from "assets/avalanche.png";
import moonbeamLogo from "assets/moonbeam.png";
import bscLogo from "assets/bsc.png";
import Tx from "components/tx";

// const useAccountStore = create((set) => ({
//   address: "",
//   loginIn: (addr: string) => set((state: any) => ({ address: addr })),
//   loginOut: () => set({ address: "" }),
// }));

const DashBoardPage = () => {
  // const [isLoginInModalOpen, setIsLoginInModalOpen] = useState(false);
  // const [isModuleModalOpen, setIsModuleModalOpen] = useState(false);
  // const [isInteractionModalOpen, setIsInteractionModalOpen] = useState(false);
  const [ethTx, setEthTx] = useState(false);
  const [ethPopup, setEthPopup] = useState(false);
  const [polygonTx, setPolygonTx] = useState(false);
  const [polygonPopup, setPolygonPopup] = useState(false);
  const [arbitrumTx, setArbitrumTx] = useState(false);
  const [arbitrumPopup, setArbitrumPopup] = useState(false);
  const [optimismTx, setOptimismTx] = useState(false);
  const [optimismPopup, setOptimismPopup] = useState(false);
  const [celoTx, setCeloTx] = useState(false);
  const [celoPopup, setCeloPopup] = useState(false);
  const [avalancheTx, setAvalancheTx] = useState(false);
  const [avalanchePopup, setAvalanchePopup] = useState(false);
  const [moonbeamTx, setMoonbeamTx] = useState(false);
  const [moonbeamPopup, setMoonbeamPopup] = useState(false);
  const [bscTx, setBscTx] = useState(false);
  const [bscPopup, setBscPopup] = useState(false);
  const [txList, setTxList] = useState([]);
  const [showTxList, setShowTxList] = useState([]);


  const unClickAll = () => {
    setEthTx(false);
    setPolygonTx(false);
    setArbitrumTx(false);
    setOptimismTx(false);
    setCeloTx(false);
    setAvalancheTx(false);
    setMoonbeamTx(false);
    setBscTx(false);
  };

  useEffect(() => {
    const loadTx = async () => {
      const userInfo = await fetch(
        "https://hyperlane-explorer.hasura.app/api/rest/messagesBySender/ff5c0ab5aa2bd380cba1d1c7d82747bca210bae8"
      );
      const data = await userInfo.json();
      // console.log(data.message);
      const message = data.message;
      const txs = message.map((tx: any) => {
        const currentTime = new Date().getTime();
        console.log(currentTime);
        let recipientTxHash;
        let status;
        if (tx.delivered_message !== null) {
          recipientTxHash = tx.delivered_message.transaction.hash.slice(0, 4) + "..." + tx.delivered_message.transaction.hash.slice(-4);
          status = "Delivered";
        } else {
          recipientTxHash = "Failed";
          status = "Failed";
        }
        return {
          id: tx.id,
          timestamp: currentTime - new Date(tx.timestamp).getTime(),
          origin: tx.origin,
          destination: tx.destination,
          senderTxHash: tx.transaction.hash.slice(0, 4) + "..." + tx.transaction.hash.slice(-4),
          recipientTxHash: recipientTxHash,
          status: status,
        };
      });
      const txsNew = txs.sort((a: any, b: any) => a.timestamp - b.timestamp);
      const txsTimeClean = txsNew.map((tx: any) => {
        const timestamp = tx.timestamp;
        let time;
        if (timestamp < 60000) {
          time = `${Math.floor(timestamp / 1000)} seconds ago`;
        } else if (timestamp < 3600000) {
          time = `${Math.floor(timestamp / 60000)} minutes ago`;
        } else if (timestamp < 86400000) {
          time = `${Math.floor(timestamp / 3600000)} hours ago`;
        } else if (timestamp < 604800000) {
          time = `${Math.floor(timestamp / 86400000)} days ago`;
        } else if (timestamp < 2592000000) {
          time = `${Math.floor(timestamp / 604800000)} weeks ago`;
        } else if (timestamp < 31536000000) {
          time = `${Math.floor(timestamp / 2592000000)} months ago`;
        } else {
          time = `${Math.floor(timestamp / 31536000000)} years ago`;
        }
        return {
          ...tx,
          timestamp: time,
        };
      });
      setTxList(txsTimeClean);
      console.log(txsTimeClean)
      console.log(txList);
    };
    loadTx();
  }, []);

  useEffect(() => {
    console.log(optimismTx)
    const txListNew = txList.filter((tx: any) => {
      if (!(ethTx || polygonTx || arbitrumTx || optimismTx || celoTx || avalancheTx || moonbeamTx || bscTx)) {
        return true;
      }
      if (ethTx && (tx.origin === 1 || tx.destination === 1)) {
        return true;
      }
      if (polygonTx && (tx.origin === 80001 || tx.destination === 80001)) {
        return true;
      }
      if (arbitrumTx && (tx.origin === 42161 || tx.destination === 42161)) {
        return true;
      }
      if (optimismTx && (tx.origin === 420 || tx.destination === 420)) {
        return true;
      }
      if (celoTx && (tx.origin === 42220 || tx.destination === 42220)) {
        return true;
      }
      if (avalancheTx && (tx.origin === 43117 || tx.destination === 43117)) {
        return true;
      }
      if (moonbeamTx && (tx.origin === 1284 || tx.destination === 1284)) {
        return true;
      }
      if (bscTx && (tx.origin === 56 || tx.destination === 56)) {
        return true;
      }
      return false;
    });
    setShowTxList(txListNew);
    console.log(txListNew)

  }, [txList, ethTx, polygonTx, arbitrumTx, optimismTx, celoTx, avalancheTx, moonbeamTx, bscTx]);

  return (
    <>
      <CommonLayout className={styles.page}>
        <div className={styles.firstView}>
          <div className={styles.heading}>Mega AA Wallet</div>
          <div className={styles.bgbox}>
            <div className={styles.description}>YOUR ADDRESS HERE</div>
            <div className={styles.cards}>
              <Card className={styles.card} onClick={() => unClickAll()}>
                Here
              </Card>
              <Card className={styles.card}>
                <img
                  src={ethereumLogo}
                  width="60"
                  height="100"
                  alt="logo"
                  onClick={() => setEthTx(!ethTx)}
                />
                <div onClick={() => setEthPopup(!ethPopup)}>Ethereum</div>
              </Card>
              <Card className={styles.card}>
                <img
                  src={polygonLogo}
                  width="100"
                  height="100"
                  alt="logo"
                  onClick={() => setPolygonTx(!polygonTx)}
                />
                <div onClick={() => setPolygonPopup(!polygonPopup)}>
                  Polygon
                </div>
              </Card>
              <Card className={styles.card}>
                <img
                  src={arbitrumLogo}
                  width="100"
                  height="100"
                  alt="logo"
                  onClick={() => setArbitrumTx(!arbitrumTx)}
                />
                <div onClick={() => setArbitrumPopup(!arbitrumPopup)}>
                  Arbitrum
                </div>
              </Card>
              <Card className={styles.card}>
                <img
                  src={optimismLogo}
                  width="100"
                  height="100"
                  alt="logo"
                  onClick={() => setOptimismTx(!optimismTx)}
                />
                <div onClick={() => setOptimismPopup(!optimismPopup)}>
                  Optimism
                </div>
              </Card>
              <Card className={styles.card}>
                <img
                  src={celoLogo}
                  width="100"
                  height="100"
                  alt="logo"
                  onClick={() => setCeloTx(!celoTx)}
                />
                <div onClick={() => setCeloPopup(!celoPopup)}>Celo</div>
              </Card>
              <Card className={styles.card}>
                <img
                  src={avalancheLogo}
                  width="100"
                  height="100"
                  alt="logo"
                  onClick={() => setAvalancheTx(!avalancheTx)}
                />
                <div onClick={() => setAvalanchePopup(!avalanchePopup)}>
                  Avalanche
                </div>
              </Card>
              <Card className={styles.card}>
                <img
                  src={bscLogo}
                  width="100"
                  height="100"
                  alt="logo"
                  onClick={() => setBscTx(!bscTx)}
                />
                <div onClick={() => setBscPopup(!bscPopup)}>BSC</div>
              </Card>
              <Card className={styles.card}>
                <img
                  src={moonbeamLogo}
                  width="100"
                  height="100"
                  alt="logo"
                  onClick={() => setMoonbeamTx(!moonbeamTx)}
                />
                <div onClick={() => setMoonbeamPopup(!moonbeamPopup)}>
                  Moonbeam
                </div>
              </Card>
              <Card className={styles.card}>
                <b>+</b>
              </Card>
            </div>
          </div>

          <div className={styles.description}>Transaction</div>
          {showTxList?.map((txDetail:any, index:any) => (
            // <div key={txDetail.id}>
              <Tx
                senderChain={txDetail.origin}
                recipientChain={txDetail.destination}
                sender={txDetail.senderTxHash}
                recipient={txDetail.recipientTxHash}
                time={txDetail.timestamp}
                status={txDetail.status}
              />
            // </div>
          ))}
        </div>
      </CommonLayout>
      {/* <Modal
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
              onClick={() => console.log("TODO")}
              style={{ margin: 15 }}
            >
              Sign Up
            </Button>
            <Button
              size="medium"
              variant="secondary"
              onClick={() => console.log("TODO")}
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
      </Modal> */}
    </>
  );
};

export default DashBoardPage;
