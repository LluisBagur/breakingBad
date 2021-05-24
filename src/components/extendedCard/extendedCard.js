import React from "react";
import { useTranslation } from "react-i18next";
import Loading from "../Loading/Loading";
import styles from "./extendedCard.module.scss";

const ExtendedCard = ({ item, quote, loading }) => {
  const [t] = useTranslation("common");
  return (
    <div className={styles.main}>
      <img src={item.img} className={styles.img} alt="character" />
      <div className={styles.column}>
        <div className={styles.title}>{item.name}</div>
        <div className={styles.item}>
          <p>
            {t("Alias: ")}
            {item.nickname}
          </p>
        </div>
        <div className={styles.item}>
          <p>
            {t("Cumpleaños: ")}
            {item.birthday}
          </p>
        </div>
        <div className={styles.item}>
          <p>
            {t("Aparece en la temporadas: ")}
            {item.appearance.join(", ")}
          </p>
        </div>
        <div className={styles.item}>
          <p>
            {t("Representado por: ")}
            {item.portrayed}
          </p>
        </div>
        <div className={styles.item}>
          <p>{t("Frase celebre:")}</p>
        </div>
        {loading ? (
          <Loading loadingPoint/>
        ) : (
          <>
            {quote.length ? (
              <div className={styles.quote}>
                <p>{quote}</p>
              </div>
            ) : (
              <p className={styles.itemError}>
                {t("No se han encontrado fases celebres")}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ExtendedCard;
