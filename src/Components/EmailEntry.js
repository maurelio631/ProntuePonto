import React from "react";
import "EmailEntry.css";

const EmailEntry = (props) => (
  <input
    className="container"
    keyboardType="email-address"
    textContentType="emailAddress"
    placeholder={props.placeholder}
  />
);
export default EmailEntry;
