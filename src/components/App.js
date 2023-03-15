import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Split from "react-split";
import Code from "./Code";
import Form from "./Details";
import he from "he";
import Preview from "./Preview";

class App extends Component {
  state = {
    Dark: true,
    DetailsData: {
      FirstName: "",
      LastName: "",
      Thubmnail: "",
      URL: "",
      Description: "",
      Keywords: "",
      Address: "",
      Phone: "",
      Email: "",
      Colour: "#bd5e38",
      Socials: {
        Facebook: "xyz",
        WhatsApp: "xyz",
        Instagram: "xyz",
        Twitter: "xyz",
        LinkedIn: "xyz",
        GitHub: "xyz",
        StackOverflow: "xyz",
      },
    },
    fileDownloadUrl: null,
    PreviewMode: false,
  };

  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark,
    });
  };

  handleChange = (e) => {
    this.setState({
      DetailsData: {
        ...this.state.DetailsData,
        [e.target.name]: e.target.value,
      },
      PreviewMode: false,
    });
  };

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
      <div className="App">
        <Header dark={this.state.Dark} className="Header">
          <span>Portfolio Generator</span>
          <button
            className="btn btn-sm btn-outline-primary rounded-circle"
            onClick={this.toggleHeader}
          >
            <i
              className={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}
            ></i>
          </button>
        </Header>
        <div className="container-fluid">
          <Split className="split">
            <div className="p-3" /*className='col-12 col-md-6'*/>
              <Form
                DetailsData={{
                  FullName: `${this.state.DetailsData.FirstName} ${this.state.DetailsData.LastName}`,
                  ...this.state.DetailsData,
                }}
                onChange={this.handleChange}
              />
              <button
                className="btn btn-success"
                onClick={() => {
                  this.download();
                }}
                disabled={this.state.PreviewMode}
                title="Go to the Code View to download."
              >
                Download
              </button>
              <a
                className="d-none"
                download={"portfolio.html"}
                href={this.state.fileDownloadUrl}
                ref={(e) => (this.doFileDownload = e)}
              >
                Download
              </a>
            </div>
            <div className="p-3" /*className='col-12 col-md-6'*/>
              <ul className="nav nav-tabs mb-2">
                <li className="nav-item">
                  <span
                    className={
                      "nav-link " + (!this.state.PreviewMode ? "active" : "")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({
                        PreviewMode: false,
                      });
                    }}
                  >
                    Code
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className={
                      "nav-link " + (this.state.PreviewMode ? "active" : "")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({
                        PreviewMode: true,
                      });
                    }}
                  >
                    Preview
                  </span>
                </li>
              </ul>
              {this.state.PreviewMode ? (
                <Preview
                  {...this.state.DetailsData}
                  FullName={`${this.state.DetailsData.FirstName} ${this.state.DetailsData.LastName}`}
                />
              ) : (
                <Code
                  {...this.state.DetailsData}
                  FullName={`${this.state.DetailsData.FirstName} ${this.state.DetailsData.LastName}`}
                />
              )}
            </div>
          </Split>
        </div>
      </div>
    );
  }
}

export default App;
