import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers, {history} from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  composeWithDevTools(
      applyMiddleware(
          routerMiddleware(history),
          sagaMiddleware,
      )
  )
);

sagaMiddleware.run(rootSaga);

export default store;
