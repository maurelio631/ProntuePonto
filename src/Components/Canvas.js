import React from "react";
import "../../src/Components/Canvas.module.css";

export default function Canvas(props) {
  return <div className="canvas">{props.children}</div>;
}
