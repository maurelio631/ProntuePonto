import React from "react";
import "../../src/Components/Title.module.css";

export default function Title(props) {
  return <h2 className="Title">{props.children}</h2>;
}
