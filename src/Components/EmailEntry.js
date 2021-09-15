import React from "react";
import Styles from "./EmailEntry.module.css";

const EmailEntry = (props) => (
  <input
    className={Styles.container}
    type="email"
    placeholder={props.placeholder}
  />
);
export default EmailEntry;
