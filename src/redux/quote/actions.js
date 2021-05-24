import types from './types';

export function getQuote(ID){
  return {
    type: types.FETCH_QUOTE_START,
    payload:{ID}
  }
};

export function getQuoteOK(quote) {
  return {
    type: types.FETCH_QUOTE_SUCCESS,
    quote
  }
};

export function getQuoteKO(errorMessage) {
  return {
    type: types.FETCH_QUOTE_FAILURE,
    errorMessage
  }
};
