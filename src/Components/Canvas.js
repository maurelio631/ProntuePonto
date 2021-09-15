import React from "react";
import Style from "../Components/Canvas.module.css";

export default function Canvas(props) {
  return <div className={Style.container}>{props.children}</div>;
}
