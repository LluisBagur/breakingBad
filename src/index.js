import React from 'react';
import ReactDOM from 'react-dom';
import i18next from "i18next"
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import {I18nextProvider} from "react-i18next"
import * as serviceWorker from './serviceWorker';
import history from './redux/history';

import common_es from "./i18n/es.json"
import common_en from "./i18n/en.json"


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

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <Router history={history}>
      <App />
      </Router>
    </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
