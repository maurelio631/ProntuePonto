import React from "react";
import Style from "./Canvas.module.css";

export default function Canvas(props) {
  return <div className={Style.container}>{props.children}</div>;
}
