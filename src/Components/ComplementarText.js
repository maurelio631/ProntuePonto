import React from "react";
import "../../src/Components/ComplementarText.module.css";

export default function ComplementarText(props) {
  return <p className="complementarText">{props.children}</p>;
}
