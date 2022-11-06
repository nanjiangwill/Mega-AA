import classNames from "classnames";
import styles from "./index.module.scss";
import ethereumLogo from "assets/ethereum.png";
import polygonLogo from "assets/polygon.png";
import arbitrumLogo from "assets/arbitrum.svg";
import optimismLogo from "assets/optimism.svg";
import celoLogo from "assets/celo.png";
import avalancheLogo from "assets/avalanche.png";
import moonbeamLogo from "assets/moonbeam.png";
import bscLogo from "assets/bsc.png";
import noneLogo from "assets/none.png";
import arrow from "assets/arrow.png";

export interface TxProps extends React.HTMLAttributes<HTMLDivElement> {
  senderChain: string;
  recipientChain: string;
  sender: string;
  recipient: string;
  time: string;
  status: string;
}
let chain: any = {};
chain = {
  1: ethereumLogo,
  5: ethereumLogo,
  10: optimismLogo,
  56: bscLogo,
  137: polygonLogo,
  420: optimismLogo,
  1284: moonbeamLogo,
  42161: arbitrumLogo,
  42220: celoLogo,
  43117: avalancheLogo,
  80001: polygonLogo,
  421613: arbitrumLogo,
  0: noneLogo,
};

const Tx = ({
  className,
  senderChain,
  recipientChain,
  sender,
  recipient,
  time,
  status,
  ...props
}: TxProps) => {
  let senderChainLogo;
  let recipientChainLogo;
  if (senderChain in chain) {
    senderChainLogo = chain[senderChain];
  } else {
    senderChainLogo = chain[0];
  }
  if (recipientChain in chain) {
    recipientChainLogo = chain[recipientChain];
  } else {
    recipientChainLogo = chain[0];
  }

  return (
    <div className={classNames(styles.tx, className)} {...props}>
      <img
        src={senderChainLogo}
        alt="senderChainLogo"
        className={styles.icon}
      />
      <img src={arrow} alt="arrow" className={styles.icon} />
      <img
        src={recipientChainLogo}
        alt="recipientChainLogo"
        className={styles.icon}
      />
      <div className={styles.sender}>
        Sender Chain Hash:
        <br />
        {sender}
      </div>
      <div className={styles.recipient}>
        Recipient Chain Hash:
        <br />
        {recipient}
      </div>
      <div className={styles.time}>
        Time:
        <br />
        {time}
      </div>
      <div className={styles.status}>
        {status}
      </div>
    </div>
  );
};

export default Tx;
