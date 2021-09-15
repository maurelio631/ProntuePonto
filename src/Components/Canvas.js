import React from "react";
import "../../src/Components/Canvas.module.css";

export default function Canvas(props) {
  return <div className="container">{props.children}</div>;
}
