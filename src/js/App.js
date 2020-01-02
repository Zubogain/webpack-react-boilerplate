import React, { Component } from "react";

import Header from "./containers/Header";
import Footer from "./containers/Footer";

import Index from "./containers/Index";

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
        <content className="content">
          <Index />
        </content>
        <Footer />
      </>
    );
  }
}

export default App;
