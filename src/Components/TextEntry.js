import React from "react";
import "TextEntry.css";

const TextEntry = (props) => (
  <input
    className="container"
    keyboardType="default"
    placeholder={props.placeholder}
  />
);

export default TextEntry;
