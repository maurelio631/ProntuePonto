import React from "react";
import "../../src/Components/TextEntry.module.css";

export default function TextEntry(props) {
  return <input className="container" placeholder={props.placeholder} />;
}
