import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import storeProvider from './storeProvider';
import createRootReducer from './root-reducer';
import rootSaga from './root-saga';
export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  createRootReducer(),
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

storeProvider.init(store);

export default storeProvider.getStore();
