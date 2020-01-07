import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Routes from "./router";

import App from "./App";
import "../assets/scss/styles.scss";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Routes />
      </App>
    </Router>
  </Provider>,
  document.getElementById("app")
);
