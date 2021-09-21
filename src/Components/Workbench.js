import React from "react";
import "../Components/Workbench.module.css";

export default function Workbench(props){
    return(<div className="workbench">{props.children}</div>)
}