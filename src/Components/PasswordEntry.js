import React from "react";
import "./PasswordEntry.css";

const PasswordEntry = (props) => (
    <input
      className="container"
      keyboardType="visible-password"
      textContentType="password"
      placeholder={props.placeholder}
    />
  );
  export default PasswordEntry;