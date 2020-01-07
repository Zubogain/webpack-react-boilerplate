import { put, call, takeEvery, all } from "redux-saga/effects";

import { fetchTodoList } from "../actions/todo";

export function* helloSaga() {
  console.log("Hello, Saga!");
}

export function* saveFetchedTodoList() {
  try {
    const data = yield call(fetchTodoList);
    yield put({ type: "FETCH_TODO_LIST", payload: data });
  } catch (error) {
    console.warn("saveFetchedTodoList", error);
  }
}

export default function* rootSaga() {
  yield all([helloSaga(), saveFetchedTodoList()]);
}
