import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.scss";

const Card = ({ item }) => {
  return (
    <Link to={`/characters/${item.char_id}/details`}>
      <div className={styles.main}>
        <img src={item.img} className={styles.img} />
        <div className={styles.name}>{item.name}</div>
      </div>
    </Link>
  );
};

export default Card;
