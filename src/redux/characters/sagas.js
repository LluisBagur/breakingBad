import { takeLatest, call, put, all } from "redux-saga/effects";
import { loadCharsInfo } from "../../api/charsInfo";
// import { getCharInfo, getCharInfoOK, getCharInfoKO } from "./actions";
import CharActionTypes from "./types";

export function* fetchCharInfo() {
  console.log("LOCO")
  try {
    const charInfo = yield call(loadCharsInfo);
    console.log(charInfo, 'pepe')
    yield put({type:'FETCH_CHARS_SUCCESS', characters: charInfo})
  } catch (error) {
    yield put({type:'FETCH_CHARS_FAILED', errorMessage: error.message})
  }
}

function* characterSagas() {
  console.log("PEPILLO")
  yield takeLatest('FETCH_CHAR_START', fetchCharInfo);
}
export default characterSagas;
// export function* characterSagas() {
//   yield all([call(onFetchCharacterStart)]);
// }



// import { takeLatest, call, put, all } from 'redux-saga/effects';

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from '../../firebase/firebase.utils';

// import {
//   fetchCollectionsSuccess,
//   fetchCollectionsFailure,
// } from './shop.actions';

// import ShopActionTypes from './shop.types';

// export function* fetchCollections() {
//   try {
//     const collectionRef = firestore.collection('collections');
//     const snapshot = yield collectionRef.get();
//     const collectionsMap = yield call(
//       convertCollectionsSnapshotToMap,
//       snapshot,
//     );
//     yield put(fetchCollectionsSuccess(collectionsMap));
//   } catch (error) {
//     yield put(fetchCollectionsFailure(error.message));
//   }
// }

// export function* onFetchCollectionsStart() {
//   yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
// }

// export function* shopSagas() {
//   yield all([call(onFetchCollectionsStart)]);
// }