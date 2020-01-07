import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <header className="header bg-dark">
        <article className="container">
          <div className="row">
            <div className="col-auto">
              <Link to="/" className="header__title btn btn-dark">
                Ready React.js template for dev.
              </Link>
            </div>

            <nav className="col-auto navbar navbar-dark ml-auto">
              <Link to="/" className="header__link btn btn-dark">
                Home
              </Link>
              <Link to="/todo" className="header__link btn btn-dark">
                Example
              </Link>
            </nav>
          </div>
        </article>
      </header>
    );
  }
}

export default Header;
