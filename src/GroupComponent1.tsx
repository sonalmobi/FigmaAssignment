import { FunctionComponent } from "react";
import styles from "./css/GroupComponent1.module.css";

export const GroupComponent1: FunctionComponent = () => {
  return (
    <div className={styles.groupDiv}>
      <img className={styles.rectangleIcon} alt="" src="rectangle-1279.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.stateDiv}>State</div>
      <img className={styles.polygonIcon} alt="" src="polygon-31.svg" />
      <div className={styles.rectangleDiv1} />
      <div className={styles.cityDiv}>City</div>
      <img className={styles.polygonIcon1} alt="" src="polygon-31.svg" />
      <div className={styles.filtersDiv}>Filters</div>
      <img className={styles.vectorIcon} alt="" src="vector-101.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.stateDiv}>State</div>
      <img className={styles.polygonIcon} alt="" src="polygon-31.svg" />
      <div className={styles.rectangleDiv1} />
      <div className={styles.cityDiv}>City</div>
      <img className={styles.polygonIcon1} alt="" src="polygon-31.svg" />
      <div className={styles.filtersDiv}>Filters</div>
      <img className={styles.vectorIcon} alt="" src="vector-101.svg" />
    </div>
  );
};
