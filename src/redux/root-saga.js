import { all, call } from 'redux-saga/effects';
import characterSagas from './characters/sagas'

export default function* rootSaga() {
  yield all([
    call(characterSagas),
  ]);
}
