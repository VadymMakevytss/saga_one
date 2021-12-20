import { fork, call, all, delay } from 'redux-saga/effects';

function* auth() {
  yield delay(2000);

  console.log('Auth ok!')

  return true
}

function* loadUsers() {
  const res = yield call(fetch, 'https://jsonplaceholder.typicode.com/users')
  const data = yield call([res, res.json]);

  console.log(data)
}

export default function* loadBasicDate() {
  yield all([
    fork(auth),
    fork(loadUsers)
  ])
}