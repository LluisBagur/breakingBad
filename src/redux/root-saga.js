import { all } from '@redux-saga/core/effects';
import characterSagas from './characters/sagas'
import quoteSagas from './quote/sagas'


export default function* rootSaga() {
  yield all([...characterSagas, ...quoteSagas]);
}
