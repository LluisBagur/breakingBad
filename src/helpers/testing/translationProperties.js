import i18next from "i18next"
import common_es from "../../i18n/es.json"
import common_en from "../../i18n/en.json"

i18next.init({
  interpolation: {escapeValue: false},
  lng: 'es',
  nsSeparator: false,
  keySeparator: false,
  resources: {
      es: {
          common: common_es
      },
      en: {
          common: common_en
      },
  },
});

const translationProperties = {
  i18n: i18next,
  tReady: true,
  t: (text) => text,
};

export default translationProperties;
