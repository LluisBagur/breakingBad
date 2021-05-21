import { takeLatest, call, put } from "redux-saga/effects";
// import { loadCharsInfo } from "../../api/charsInfo";

let baseUrl = "https://www.breakingbadapi.com/api/characters";

function getApi() {
  console.log('im in')
  return fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

export function* fetchCharInfo(action) {
  console.log("into saga");
  try {
    const charInfo = yield call(getApi);
    yield put({ type: "FETCH_CHARS_SUCCESS", characters: charInfo });
  } catch (error) {
    yield put({ type: "FETCH_CHARS_FAILED", errorMessage: error.message });
  }
}

function* characterSagas() {
  console.log("lelo")
  yield takeLatest('FETCH_CHAR_START', fetchCharInfo);
}
export default characterSagas;
