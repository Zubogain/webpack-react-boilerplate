import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import TodoList from "./list";
import TodoForm from "./form";

import data from "./data";

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { routes, todo } = this.props;
    return (
      <div className="todo">
        <article className="container">
          <div className="row">
            <TodoForm />
            <TodoList list={todo} />
          </div>
        </article>
      </div>
    );
  }
}

function mapStateToProps({ todo }) {
  return { todo };
}

export default connect(mapStateToProps)(Todo);
