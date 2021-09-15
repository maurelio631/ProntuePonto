import React from "react";
import Styles from "./PasswordEntry.module.css";

const PasswordEntry = (props) => (
  <input className={Styles.container} placeholder={props.placeholder} />
);
export default PasswordEntry;
