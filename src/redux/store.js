import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducer';
import rootSaga from './root-saga';


//create saga middleware
const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];

export const store = createStore(rootReducer, compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f

));

//run saga middleware

sagaMiddleware.run(rootSaga)
