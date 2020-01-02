import React, { Component } from "react";
import ReactLogo from "../../assets/img/react.svg";

class Index extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="index">
        <img className="index__logo" src={ReactLogo} />
      </div>
    );
  }
}

export default Index;
