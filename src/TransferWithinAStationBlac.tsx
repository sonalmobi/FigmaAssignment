import { FunctionComponent } from "react";
import styles from "./css/TransferWithinAStationBlac.module.css";

export const TransferWithinAStationBlac: FunctionComponent = () => {
  return (
    <div className={styles.transferWithinAStationBlacDiv}>
      <img className={styles.vectorIcon} alt="" />
      <img className={styles.vectorIcon1} alt="" src="vector.svg" />
    </div>
  );
};
