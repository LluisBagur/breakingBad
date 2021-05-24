import React from "react";
import i18next from "i18next"
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryHistory } from 'history';
import store from './redux/store';
import { Router } from 'react-router-dom';
import {I18nextProvider} from "react-i18next"
import App from "./App";
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

jest.mock("./views/charDetail/charDetail", () => () => <p>CharDetail</p>);
jest.mock("./views/charList/charList", () => () => <p>CharList</p>);

describe("When App is rendered", () => {
  test("render their components", () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const { getByText } = render(
      <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <Router history={history}>
        <App />
        </Router>
      </Provider>
      </I18nextProvider>
    );

    expect(getByText("CharList")).toBeInTheDocument();

  });
  // test("renders their components", () => {
  //   const history = createMemoryHistory({ initialEntries: ['/characters/:id/details'] });
  //   const { getByText } = render(
  //     <I18nextProvider i18n={i18next}>
  //     <Provider store={store}>
  //       <Router history={history}>
  //       <App haveInfo={[1, 2, 3]}/>
  //       </Router>
  //     </Provider>
  //     </I18nextProvider>
  //   );

  //   expect(getByText("CharDetail")).toBeInTheDocument();

  // });
});
