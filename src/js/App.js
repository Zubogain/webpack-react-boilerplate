import React, { Component } from "react";

import Header from "./containers/Header";
import Footer from "./containers/Footer";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      test: "Test!"
    };
  }

  render() {
    return (
      <>
        <Header />
        <main className="content bg-light">{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default App;
