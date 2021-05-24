import types from './types';

export function getCharInfo(){
  return {
    type: types.FETCH_CHARS_START,
  }
};

export function getCharInfoOK(charInfo) {
  return {
    type: types.FETCH_CHARS_SUCCESS,
    charInfo
  }
};

export function getCharInfoKO(errorMessage) {
  return {
    type: types.FETCH_CHARS_FAILURE,
    errorMessage
  }
};
