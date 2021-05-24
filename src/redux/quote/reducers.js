import types from './types';

const initialState = {
  quote: [],
  loading: false,
  error: null,
}

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_QUOTE_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        quote: action.quote,
      };
    case types.FETCH_QUOTE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.errorMessage,
      };
  }
  return state;
};

export default quoteReducer;

