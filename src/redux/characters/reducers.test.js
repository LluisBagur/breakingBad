import charReducer from "./reducers";
import types from "./types";

describe("charReducer", () => {
  const initialState = {
    characters: [],
    loading: false,
    error: null,
  };

  it("should return the initial state", () => {
    expect(charReducer(undefined, {})).toEqual({
      characters: [],
      error: null,
      loading: false,
    });
  });

  it("should handle FETCH_CHARS_START", () => {
    expect(
      charReducer(initialState, {
        type: types.FETCH_CHARS_START,
        loading: true,
      })
    ).toEqual({ characters: [], error: null, loading: true });
  });

  it("should handle FETCH_CHARS_SUCCESS", () => {
    const action = {
      type: types.FETCH_CHARS_SUCCESS,
      charInfo: [
        {
          id: 1,
          name: "foo",
        },
      ],
    };
    expect(charReducer(initialState, action)).toEqual({
      loading: false,
      error: null,
      characters: [
        {
          id: 1,
          name: "foo",
        },
      ],
    });
  });
  it("should handle FETCH_CHARS_FAILURE", () => {
    const action = {
      type: types.FETCH_CHARS_FAILURE,
      errorMessage: "error",
    };
    expect(charReducer({}, action)).toEqual({ loading: false, error: "error" });
  });
});
