import React from "react";
import ReactDOM from "react-dom";
import Router from "./routes/routes"
import WebFont from "webfontloader";
import "./index.css";

WebFont.load({
  google:{
    families:['Poppins']
  }
})

ReactDOM.render(
  <Router/>,
  document.getElementById("root")
);
