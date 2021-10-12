import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const DATA = [
  {
    id: "id-0",
    comment: "Dooter is in Echendu's house",
    time: "9 hours ago",
    reply: [],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App commentList={DATA} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
