import quoteReducer from "./reducers";
import types from "./types";

describe("quoteReducer", () => {
  const initialState = {
    quote: [],
    loading: false,
    error: null,
  };

  it("should return the initial state", () => {
    expect(quoteReducer(undefined, {})).toEqual({
      quote: [],
      loading: false,
      error: null,
    });
  });

  it("should handle FETCH_QUOTE_START", () => {
    expect(
      quoteReducer(initialState, {
        type: types.FETCH_QUOTE_START,
        loading: true,
      })
    ).toEqual({ quote: [], error: null, loading: true });
  });

  it("should handle FETCH_QUOTE_SUCCESS", () => {
    const action = {
      type: types.FETCH_QUOTE_SUCCESS,
      quote: [
        {
          id: 1,
          name: "foo",
        },
      ],
    };
    expect(quoteReducer(initialState, action)).toEqual({
      loading: false,
      error: null,
      quote: [
        {
          id: 1,
          name: "foo",
        },
      ],
    });
  });
  it("should handle FETCH_QUOTE_FAILURE", () => {
    const action = {
      type: types.FETCH_QUOTE_FAILURE,
      errorMessage: "error",
    };
    expect(quoteReducer({}, action)).toEqual({ loading: false, error: "error" });
  });
});
