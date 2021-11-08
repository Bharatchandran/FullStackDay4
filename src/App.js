import React, { Component } from "react";

class App extends Component {
  state = {
    Name: "",
    Refresh: false,
  };
  componentDidMount() {
    console.log("CompoundDidMount called");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("CompoundDidUpdate called");
    console.log({ prevProps, prevState });
    if (prevState.Refresh !== this.state.Refresh) {
      window.alert("Call the API!");
    }
  }
  render() {
    //if (this.state.Salutation !== "Hello")

    console.log("Render called!");
    return (
      <div>
        <p>
          Hello.{" "}
          {this.state.Name.trim().length === 0
            ? "Please Enter your Name"
            : `My name is ${this.state.Name}`}
        </p>
        <input
          type="text"
          value={this.state.Name}
          onChange={(e) => {
            this.setState({ Name: e.target.value });
          }}
        ></input>
        <button
          onClick={() => {
            this.setState({ Refresh: !this.state.Refresh });
          }}
          disabled={this.state.Name.trim().length === 0}
        >
          Refresh
        </button>
      </div>
    );
  }
}
export default App;
