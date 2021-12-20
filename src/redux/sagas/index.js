import { spawn, all, call } from 'redux-saga/effects';
import loadBasicDate from "./initialSagas";
import pageLoaderSagas from './pageLoaderSagas';

export default function* rooSaga() {
    const sagas = [ 
      loadBasicDate,
      pageLoaderSagas 
    ]

    const retrySagas = sagas.map(saga => {
      return spawn(function* () {
        while(true) {
          try {
            yield call(saga);
            break;
          } catch(e) {
            console.log(e);
          }
        }
      })
    })

    yield all(retrySagas)

  // code
}
