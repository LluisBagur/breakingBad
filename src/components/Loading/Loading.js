import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./loading.module.scss";

export const Loading = ({ loadingPoint = false }) => {
  const [t] = useTranslation("common");
  return (
    <div className={styles.container} data-testid="loader">
      {!loadingPoint ? (
        <div className={styles.icon}>
          <div className={styles.bar}></div>
          <div className={`${styles.bar} ${styles.bar2}`}></div>
        </div>
      ) : (
        <div className={styles.loadingPointContainer}>
          <span className={styles.loadingText}>{t("Cargando")}</span>
          <div className={styles["dot-pulse"]}></div>
        </div>
      )}
    </div>
  );
};
export default Loading;
