import React from "react";
import "../../src/Components/LoginBtn.module.css";

export default function LoginBtn(props){
  return (
    <button onPress={props.onPress} className="container" >
      {props.children}
    </button>
  );
};
