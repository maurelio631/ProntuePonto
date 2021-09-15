import React from "react";
import ReactDOM from "react-dom";
import Login from "../src/Views/Login";

import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route path="/" exact="true" component={Login}/>
  </Router>,
  document.getElementById("root")
);
