
import { combineReducers } from 'redux';
import charReducer from './characters/reducers';
import quoteReducer from './quote/reducers';

const createRootReducer = () =>
  combineReducers({
    data: charReducer,
    quote: quoteReducer,
    
  });

export default createRootReducer;