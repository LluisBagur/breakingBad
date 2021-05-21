import {createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga';
import rootReducer from './root-reducer';

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),  
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga)
export default store;