import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-dark">
        <article className="container">
          <div className="row">
            <a
              className="footer__link col-auto mr-auto ml-auto btn btn-dark"
              href="https://github.com/Zubogain"
            >
              GitHub: Zubogain
            </a>
          </div>
        </article>
      </footer>
    );
  }
}

export default Footer;
