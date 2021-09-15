import React from "react";
import "../../src/Components/Container.module.css";

export default function Container(props) {
  return <div className="container">{props.children}</div>;
}

