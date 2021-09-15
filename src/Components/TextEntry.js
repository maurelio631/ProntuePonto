import React from "react";
import "../../src/Components/TextEntry.module.css";

export default function TextEntry(props) {
  return <input className="textEntry" placeholder={props.placeholder} />;
}
