import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageNotFound from "./containers/PageNotFound";

import Index from "./containers/Index";
import Todo from "./containers/todo/index";

const routes = [
  {
    path: "/",
    component: Index,
    exact: true
  },
  {
    path: "/todo",
    component: Todo
  },
  {
    path: "*",
    component: PageNotFound
  }
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

export default function RouteConfig() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} index={i} />
      ))}
    </Switch>
  );
}
