import React, { Component } from "react";

const TodoList = props => {
  const { list } = props;
  return (
    <div className="todo__list col-12 col-md-10 col-lg-8 mr-auto ml-auto">
      <ul className="list-group">
        {list instanceof Array &&
          list.map((el, i) => {
            console.log(el);
            return (
              <li
                key={i}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                <p className="todo__list-item-text">{el.text}</p>
                <div className="todo__list-item-group">
                  <a className="todo__list-item-delete btn btn-dark">
                    <i className="fa fa-minus" aria-hidden="true"></i>
                  </a>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;
