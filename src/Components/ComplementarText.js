import React from "react";
import Styles from "../Components/ComplementarText.module.css";

const ComplementarText = (props)=><p className={Styles.container}>{props.children}</p>
export default ComplementarText;
