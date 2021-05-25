import React from "react";
import {useTranslation} from "react-i18next";
import IconSpain from '../../assets/images/spain.svg';
import IconUK from '../../assets/images/united-kingdom.svg';
import styles from "./lenguageSelector.module.scss";

const LenguageSelector = () => {
  const {i18n} = useTranslation('common');

  return (
    <div className={styles.lenguageSelector}>
        <img src={IconSpain} alt='español' onClick={() => i18n.changeLanguage('es')}/>
        <img src={IconUK} alt='english' onClick={() => i18n.changeLanguage('en')}/>
    </div>
  );
};

export default LenguageSelector;
