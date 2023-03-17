import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.scss";
import { Provider } from "react-redux";
import configureStore from "./store";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "Mgo+DSMBaFt/QHRqVVhlWFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSn9Ud0dnXX9ednBSQA==;Mgo+DSMBPh8sVXJ0S0J+XE9BclRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdURkWH1adHRVQGZfVw==;ORg4AjUWIQA/Gnt2VVhkQlFac1tJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZiXn5cdHBVRmZUUEI=;MTM2MDQ3N0AzMjMwMmUzNDJlMzBNS3dLWSs1Yk1zYVl0R3pYUzBYK1JRUkdMQ1ZTZ1c3YWtuQ0gyNzNsQWxNPQ==;MTM2MDQ3OEAzMjMwMmUzNDJlMzBkRFEwUXZpa2tndDNCbFZwc2UzY3VQQ2JRdmFHMGFRUWpsODJLRmhSR1pNPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpGVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVgWHhfcnBRRmBUUkVw;MTM2MDQ4MEAzMjMwMmUzNDJlMzBRUjlLUUQyNjNieFlWVlh2S1o1bVJMWE9YMWRqTHY2a1lMTXE3TzBBdDU0PQ==;MTM2MDQ4MUAzMjMwMmUzNDJlMzBHN2xGWFlXWVFDM0NGc2habnNFTlFCMWc1emdYSlNDL0tIak1TcEdVVjVFPQ==;Mgo+DSMBMAY9C3t2VVhkQlFac1tJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZiXn5cdHBVRmldUkI=;MTM2MDQ4M0AzMjMwMmUzNDJlMzBmN0xjSVgreHZ2bFFKZk05OHdzbXhYNk03WEhhQXlnNm50WGpFamRyYWpZPQ==;MTM2MDQ4NEAzMjMwMmUzNDJlMzBGRlBvV08xYlQ1M2w0Z3c4NkJ2M1RyRjZCL2RKbGs0Y1VOb1Rxbmx5RHBRPQ==;MTM2MDQ4NUAzMjMwMmUzNDJlMzBRUjlLUUQyNjNieFlWVlh2S1o1bVJMWE9YMWRqTHY2a1lMTXE3TzBBdDU0PQ=="
);

ReactDOM.render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
