import React from "react";
import "./LoginBtn.css";

const LoginBtn = (props) => {
  return (
    <button onPress={props.onPress} className="container" >
      {props.children}
    </button>
  );
};

export default LoginBtn;