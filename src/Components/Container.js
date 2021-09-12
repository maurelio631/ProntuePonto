import React from "react";
import "../Components/Container.css";

export default function Container(props) {
  return <div className="container">{props.children}</div>;
}
