import React from "react";
import "TextEntry.module.css";

const TextEntry = (props) => (
  <input
    className="container"
    keyboardType="default"
    placeholder={props.placeholder}
  />
);

export default TextEntry;
