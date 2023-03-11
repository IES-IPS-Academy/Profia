import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Code from "./Code";
import Details from "./Details";

// React class component for the App
class App extends Component {
  state = {
    // Default state for app header
    Dark: true,
    // Default values for user details
    DetailsData: {
      FirstName: "Value of FirstName",
      LastName: "Value of LastName",
      Thumbnail: "Value of Thumbnail",
      URL: "Value of URL",
      Description: "Value of Description",
      KeyWords: "Value of KeyWords",
      Address: "Value of Address",
      Phone: "Value of Phone",
      Email: "Value of Email",
    },
  };
  // Functiion to toggle dark mode for header
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark,
    });
  };
  render() {
    return (
      // this.state.Dark sets current state of dark variable to header (True gives dark and False gives light mode)
      <div className="App">
        <Header dark={this.state.Dark} className="Header">
          <span>Portfolio Generator</span>
          <button
            className="btn btn-sm btn-outline-primary ml-3 rounded-circle"
            onClick={this.toggleHeader}
          >
            {/* this.state.Dark checks for boolean value of dark variable. If it is true, the option shown is to switch to light mode, if false, the option shown is dark mode */}
            <i class={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}></i>
          </button>
        </Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 scroll-div">
              <Details DetailsData={this.state.DetailsData} />
            </div>
            <code className="col-12 col-sm-6 scroll-div">
              <Code
                {...this.state.DetailsData}
                Fullname={
                  this.state.DetailsData.FirstName +
                  " " +
                  this.state.DetailsData.LastName
                }
              />
            </code>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
