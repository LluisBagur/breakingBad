
import { put, takeLatest, call } from '@redux-saga/core/effects';
import {getApiQuote} from '../../api/charsInfo'
import { getQuoteKO, getQuoteOK } from './actions';
import types from './types';



function* fetchQuoteByChar(action) {
  try {
    const quote = yield call(getApiQuote,action.payload.ID);
    yield put(getQuoteOK(quote ));
  } catch (e) {
    yield put(getQuoteKO(e.message));
  }
}
export default [takeLatest(types.FETCH_QUOTE_START, fetchQuoteByChar)];
