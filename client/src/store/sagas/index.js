import { all, call, spawn } from 'redux-saga/effects';
import nationSaga from './nation.saga';

function errorHandler(error) {
  console.log(error);
}

const spawnSagasList = (sagasList) =>
  sagasList.map(({ saga, errorHandler }) =>
    spawn(function* s() {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          yield* errorHandler(e);
        }
      }
    })
  );

export default function* rootSaga() {
  const sagaList = [
    {
      saga: nationSaga,
      errorHandler: errorHandler,
    },
  ];

  yield all(spawnSagasList(sagaList));
}