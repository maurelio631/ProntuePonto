import React from "react";
import "../../src/Components/EmailEntry.module.css";

export default function EmailEntry(props) {
  return (
    <input
      className="EmailEntry"
      type="email"
      placeholder={props.placeholder}
    />
  );
}
