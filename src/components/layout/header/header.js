import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/images/logoBB.png'
import styles from "./header.module.scss";

export const Header = ({ i18n }) => {
  return (
      <header className={styles.root}>
          <Link
            to={"/"}
            >
              <img className={styles.logo} src={logo}/>
            
          </Link>
      </header>
  );
};
export default Header;
