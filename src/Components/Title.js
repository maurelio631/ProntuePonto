import React from "react";
import Styles from "./Title.module.css";

const Title = (props) => <h2 className={Styles.container}>{props.children}</h2>

export default Title;
