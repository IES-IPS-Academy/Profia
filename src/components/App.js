import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Code from "./Code";
import Details from "./Details";
class App extends Component {
  state = {
    Dark: true,
  };
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark,
    });
  };
  render() {
    const Data = {
      FullName: "Value of FullName",
      Thumbnail: "Value of Thumbnail",
      URL: "Value of URL",
      Description: "Value of Description",
      KeyWords: "Value of KeyWords",
      FirstName: "Value of FirstName",
      LastName: "Value of LastName",
      Address: "Value of Address",
      Phone: "Value of Phone",
      Email: "Value of Email",
    };
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="Header">
          <span>Portfolio Generator</span>
          <button
            className="btn btn-sm btn-outline-primary ml-3 rounded-circle"
            onClick={this.toggleHeader}
          >
            <i class={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}></i>
          </button>
        </Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6">
              <Details />
            </div>
            <div className="col-12 col-sm-6">
              <Code {...Data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
