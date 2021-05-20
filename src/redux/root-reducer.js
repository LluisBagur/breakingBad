
import { combineReducers } from 'redux';
import charReducer from './characters/reducers';


const rootReducer = combineReducers({
  character: charReducer,
});

export default rootReducer;