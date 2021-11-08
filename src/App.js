import React, { Component } from "react";

const SameFileFuncComp = (props) => {
  return (
    <div className="SameFileFuncComp">
      <p>Props:</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    console.log("Constructor called");
  }

  state = {
    Name: "Bharat",
    Salutation: "Hola",
    Timer: 1,
  };

  componentDidMount() {
    console.log("componentDidMount called");
    setInterval(() => {
      this.setState({
        Name: "Bharatchandran",
        Salutation: "Hello",
        Timer: this.state.Timer + 1,
      });
    }, 5000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }
  render() {
    //if (this.state.Salutation !== "Hello")

    console.log("render called");
    return (
      <div>
        <p>
          {this.state.Salutation}
          {this.state.Name}
        </p>
        <p>Timer: {this.state.Timer}</p>
        <SameFileFuncComp Name="Bharat" Raj={true} Praveen={15} />
      </div>
    );
  }
}
export default App;
