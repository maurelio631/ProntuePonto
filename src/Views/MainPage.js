import React from "react";
import Sidebar from "../Components/Sidebar";
import Workbench from "../Components/Workbench";
import "../Views/MainPage.css";
export default function MainPage(props) {
  return (
    <Workbench>
      <Sidebar />
    </Workbench>
  );
}
