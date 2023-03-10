import React, { Component } from "react";
import Header from "./Bootstrap/Header";
class App extends Component {
  state = {
    Dark: false,
  };
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark,
    });
  };
  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} classsname="mb-5">
          Portfolio Generator
          <button
            className={`btn btn${this.state.Dark ? "-outline" : ""}-primary`}
            onClick={this.toggleHeader}
          >
            Toggle Dark mode
          </button>
        </Header>
      </div>
    );
  }
}
export default App;
