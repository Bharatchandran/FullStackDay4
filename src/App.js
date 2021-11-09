import React, { Component } from "react";
import Navbar from "./Navbar";

class App extends Component {
  state = { Dark: false };
  toggleNav = () => {
    this.setState({ Dark: !this.state.Dark });
  };
  render() {
    return (
      <div>
        <Navbar dark={this.state.Dark} toggleNav={this.toggleNav}>
          React Application
        </Navbar>
        {/* <Navbar dark={!this.state.Dark}>React Application</Navbar> */}
      </div>
    );
  }
}
export default App;
