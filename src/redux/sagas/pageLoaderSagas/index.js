import { call, takeEvery, apply } from "redux-saga/effects";

export function* loadBlogData() {
  const res = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
  const data = yield apply(res, res.json);

  console.log('data: ', data);
};

export default function* LoadPageSaga() {
  yield takeEvery('LOAD_BLOG_DATA', loadBlogData);
}