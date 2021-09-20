import React from "react";
import "../Components/Sidebar.module.css";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <img className="sidebarItem" src={require("../Assets/img/LogoPeP.png")}/>
    </div>
  );
}
