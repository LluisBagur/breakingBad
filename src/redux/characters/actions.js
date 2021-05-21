// import CharActionTypes from './types';

// export const getCharInfo = () => ({
//   type: CharActionTypes.FETCH_CHARS_START
// });

// export const getCharInfoOK = charInfo => ({
//   type: CharActionTypes.FETCH_CHARS_SUCCESS,
//   payload: charInfo
// });

// export const getCharInfoKO = errorMessage => ({
//   type: CharActionTypes.FETCH_CHARS_FAILURE,
//   payload: errorMessage
// });

// import characterSagas from './sagas';
import * as type from './types';

export function getCharInfo(characters){
  return {
    type: type.FETCH_CHARS_START,
    payload: characters,
  }
};