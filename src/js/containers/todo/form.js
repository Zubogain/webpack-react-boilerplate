import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="todo__form form-inline col-12 col-md-10 col-lg-8 mr-auto ml-auto">
        <div className="todo__form-group input-group w-100">
          <input
            type="text"
            className="todo__form-input form-control h-100"
            placeholder="Add new task"
          />
          <div className="input-group-append">
            <button className="todo__form-btn btn btn-dark" type="button">
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default TodoForm;
