import React from "react";
import { Link } from "react-router-dom";
import LenguageSelector from "../../LenguageSelector/LenguageSelector";
import logo from "../../../assets/images/logoBB.png";
import styles from "./header.module.scss";

export const Header = ({ i18n }) => {
  return (
    <header className={styles.root}>
      <Link to={"/"}>
        <img alt="logo" className={styles.logo} src={logo} />
      </Link>
      <LenguageSelector />
    </header>
  );
};
export default Header;
