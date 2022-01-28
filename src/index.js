import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import "./components/App.css";
import "./components/Introduction.css";
import "./components/Navigation.css";
import "./components/Menu.css";
import "./components/Footer.css";
import "./components/CreateComents.css";
import "./components/Coments.css";
import "./components/Upload.css";
import "./components/Preview.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
