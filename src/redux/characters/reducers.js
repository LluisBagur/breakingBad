import types from './types';

const initialState = {
  characters: [],
  loading: false,
  error: null,
}

const charReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CHARS_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_CHARS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.charInfo,
      };
    case types.FETCH_CHARS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.errorMessage,
      };
      default:
        return state;
  }
};

export default charReducer;

