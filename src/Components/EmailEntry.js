import React from "react";
import "../../src/Components/EmailEntry.module.css";

export default function EmailEntry(props) {
  return (
    <input
      className="container"
      type="email"
      placeholder={props.placeholder}
    />
  );
}
