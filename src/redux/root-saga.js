import { all } from 'redux-saga/effects';
import characterSagas from './characters/sagas'

export default function* rootSaga() {
  yield all([
    characterSagas(),
  ]);
}
