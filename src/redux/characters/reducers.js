import CharActionTypes from './types';

const INITIAL_STATE = {
  characters: [],
  loading: false,
  errorMessage: undefined
};

export default function charReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CharActionTypes.FETCH_CHARS_START:
      return {
        ...state,
        loading: true
      };
    case CharActionTypes.FETCH_CHARS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload
      };
    case CharActionTypes.FETCH_CHARS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

