import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    console.log("Constructor called");
  }

  state = {
    Name: "Bharat",
    Salutation: "Hola",
  };

  componentDidMount() {
    console.log("componentDidMount called");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }
  render() {
    if (this.state.Salutation !== "Hello")
      setTimeout(() => {
        this.setState({
          Name: "Bharatchandran",
          Salutation: "Hello",
        });
      }, 5000);
    console.log("render called");
    return (
      <div>
        {this.state.Salutation}
        {this.state.Name}
      </div>
    );
  }
}
export default App;
