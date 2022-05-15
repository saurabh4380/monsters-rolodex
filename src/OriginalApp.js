import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class OriginalApp extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Saurabh", lastName: "Umadikar" },
      language: "Marathi",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            Hello {this.state.name.firstName} {this.state.name.lastName}
          </p>
          <p>{this.state.language}</p>
          <button
            onClick={() => {
              this.setState({ name: { firstName: "John", lastName: "Doe" } });
            }}
          >
            Change name1
          </button>
          <button
            onClick={() => {
              this.setState(
                (state, props) => {
                  return { name: { firstName: "Jane", lastName: "Doe" } };
                },
                () => {
                  //this call back function runs after all the setstate changes finishes
                  console.log(this.state);
                }
              );
            }}
          >
            Change name2
          </button>
        </header>
      </div>
    );
  }
}

export default OriginalApp;
