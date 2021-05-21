import React from "react";
import { Link } from "react-router-dom";
import styles from "./extendedCard.module.scss";

const ExtendedCard = ({ item }) => {
  console.log({ item });
  return (
    <div className={styles.main}>
        <img src={item.img} className={styles.img} />
      <div className={styles.column}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.portrayed}>{item.portrayed}</div>
        <div className={styles.birthday}>{item.birthday}</div>
        <div className={styles.appearance}>{item.appearance}</div>
        <div className={styles.name}>{item.name}</div>
      </div>
    </div>
  );
};

export default ExtendedCard;
