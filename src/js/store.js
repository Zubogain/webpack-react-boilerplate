import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { createStateSyncMiddleware } from "redux-state-sync";

import rootReducer from "./reducers/index";

import rootTodoSaga from "./sagas/todo";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(
      sagaMiddleware,
      createLogger({
        level: "info",
        collapsed: true
      }),
      createStateSyncMiddleware({
        broadcastChannelOption: {
          type:
            typeof BroadcastChannel !== "undefined" ? "native" : "localstorage"
        }
      })
    )
  )
);

sagaMiddleware.run(rootTodoSaga);

export default store;
