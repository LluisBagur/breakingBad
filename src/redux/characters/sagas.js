
import { put, takeLatest, call } from '@redux-saga/core/effects';
import {getApi} from '../../api/charsInfo'
import { getCharInfoKO, getCharInfoOK } from './actions';
import types from './types';



function* fetchCharInfo() {
  try {
    const charInfo = yield call(getApi);
    yield put(getCharInfoOK(charInfo ));
  } catch (e) {
    yield put(getCharInfoKO(e.message));
  }
}

const saga = [takeLatest(types.FETCH_CHARS_START, fetchCharInfo)]
export default saga;
