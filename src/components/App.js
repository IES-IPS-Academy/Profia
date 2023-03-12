import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Code from "./Code";
import Details from "./Details";
import he from "he";

// React class component for the App
class App extends Component {
  state = {
    // Default state for app header
    Dark: true,
    // Default values for user details
    DetailsData: {
      FirstName: "",
      LastName: "",
      Thumbnail: "",
      URL: "",
      Description: "",
      KeyWords: "",
      Address: "",
      Phone: "",
      Email: "",
      Socials: {
        Facebook: "",
        WhatsApp: "",
        Instagram: "",
        Twitter: "",
        LinkedIn: "",
        GitHub: "",
        StackOverflow: "",
      },
      Experience: [
        {
          Role: "",
          Company: "",
          Description: "",
          StartDate: "",
          EndDate: "",
        },
      ],
      Education: [
        {
          Institute: "",
          Degree: "",
          Specialization: "",
          GPA: "",
          StartDate: "",
          EndDate: "",
        },
      ],
      Skills: {
        Tools: [],
        Workflow: [],
      },
      Interests: [],
      Awards: [],
    },
  };
  // Functiion to toggle dark mode for header
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark,
    });
  };
  // Function to handle changes
  handleChange = (e) => {
    this.setState({
      DetailsData: {
        ...this.state.DetailsData,
        [e.target.name]: e.target.value,
      },
    });
  };
  // Funtion for download button
  download = () => {
    let output = he.decode(
      document.getElementsByClassName("codefile")[0].innerHTML
    );
    const blob = new Blob([output]);
    const fileDownloadUrl = URL.createObjectURL(blob);
    this.setState({ fileDownloadUrl: fileDownloadUrl }, () => {
      this.doFileDownload.click();
      URL.revokeObjectURL(fileDownloadUrl);
      this.setState({ fileDownloadUrl: "" });
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
              <Details
                DetailsData={{
                  FullName: `${this.state.DetailsData.FirstName} ${this.state.DetailsData.LastName}`,
                  ...this.state.DetailsData,
                }}
                onChange={this.handleChange}
              />
            </div>
            <code className="col-12 col-sm-6 scroll-div">
              <Code
                {...this.state.DetailsData}
                FullName={`${this.state.DetailsData.FirstName} ${this.state.DetailsData.LastName}`}
              />
            </code>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
