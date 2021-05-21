// import CharActionTypes from './types';
import * as type from './types'

// const INITIAL_STATE = {
//   characters: [{
//     char_id: 1,
//     name: "Walter White",
//     birthday: "09-07-1958",
//     occupation: [
//         "High School Chemistry Teacher",
//         "Meth King Pin"
//     ],
//     img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
//     status: "Deceased",
//     appearance: [1, 2, 3, 4, 5],
//     nickname: "Heisenberg",
//     portrayed: "Bryan Cranston"
// },],
  // loading: false,
  // errorMessage: undefined
// };
const INITIAL_STATE = {
  characters: [],
  loading: false,
  error: null,
}

export default function charReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case type.FETCH_CHARS_START:
      return {
        ...state,
        loading: true
      }
    case type.FETCH_CHARS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.characters
      }
    case type.FETCH_CHARS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.errorMessage
      }
    default:
      return state;
  }
};

