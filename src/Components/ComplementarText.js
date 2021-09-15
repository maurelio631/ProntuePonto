import React from "react";
import "../../src/Components/ComplementarText.module.css";

export default function ComplementarText(props) {
  return <p className="container">{props.children}</p>;
}
