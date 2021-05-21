
import { combineReducers } from 'redux';
import charReducer from './characters/reducers';


const rootReducer = combineReducers({
  data: charReducer,
});

export default rootReducer;