import React from "react";
import Styles from "./LoginBtn.module.css";

const LoginBtn = (props) => {
  return (
    <button onPress={props.onPress} className={Styles.container} >
      {props.children}
    </button>
  );
};

export default LoginBtn;