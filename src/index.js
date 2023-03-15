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
  "MTMzOTc3MEAzMjMwMmUzNDJlMzBveXNlV1pFOTBLd2RDRmM0TXk5R0pXYk1haThuQlRUdkVCL2wvVzVBcUNFPQ==;Mgo DSMBaFt/QHRqVVhkVFpHaV1AQmFJfFBmQWlYfVRycUUmHVdTRHRcQl5iTH9Vd0dhXHpfcXU=;Mgo DSMBMAY9C3t2VVhkQlFacldJXnxLfEx0RWFab1p6dVdMYllBJAtUQF1hSn5Qd0BiX35ccnFQRGVd;Mgo DSMBPh8sVXJ0S0J XE9AflRBQmFLYVF2R2BJe1Rxdl9EZUwxOX1dQl9gSX1Sc0RlWH1cdXFRRmE=;MTMzOTc3NEAzMjMwMmUzNDJlMzBtUzNPbndNL1R3TFlPUEJVa2p2Q0Z5dTNGM0JBSERuRmVTRUpYOWxCd2N3PQ==;NRAiBiAaIQQuGjN/V0Z WE9EaFtKVmBWfFFpR2NbfE50flREal5UVBYiSV9jS31TdURmWHlfcnZQQ2haUA==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxLfEx0RWFab1p6dVdMYllBJAtUQF1hSn5Qd0BiX35ccnFTRmJd;MTMzOTc3N0AzMjMwMmUzNDJlMzBIM0xVSDhQS3NSQ2ZYallBRjRBQVUxaVBMcmt0YUZ5VmQzVnRQZHNqMEdNPQ==;MTMzOTc3OEAzMjMwMmUzNDJlMzBPZ3NjUGZBdWpsV25ZZzZCb3ROdThGVko2c2RrdHFmTFNQQ0swWUNXcmFnPQ==;MTMzOTc3OUAzMjMwMmUzNDJlMzBKaTJJdHdOQ3B1dHJZdVVxMFdJeThOdXBmY09pMXlXMVJPd2g2YVQweXNvPQ==;MTMzOTc4MEAzMjMwMmUzNDJlMzBabUwyeGw4ZnNGZXZvanZoa1hmQ3AxY1h5aExuZ0poRXN2clNUZlRMa0Y0PQ==;MTMzOTc4MUAzMjMwMmUzNDJlMzBveXNlV1pFOTBLd2RDRmM0TXk5R0pXYk1haThuQlRUdkVCL2wvVzVBcUNFPQ=="
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
