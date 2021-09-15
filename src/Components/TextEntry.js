import React from "react";
import Styles from "./TextEntry.module.css";

const TextEntry = (props) => (
  <input
    className={Styles.container}
    placeholder={props.placeholder}
  />
);

export default TextEntry;
