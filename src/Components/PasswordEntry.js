import React from "react";
import "../../src/Components/PasswordEntry.module.css";

export default function PasswordEntry(props) {
  return <input className="container" placeholder={props.placeholder} />
};