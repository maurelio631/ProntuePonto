import React from "react";
import Styles from "./Container.module.css";

export default function Container(props) {
  return <div className={Styles.container}>{props.children}</div>;
}

