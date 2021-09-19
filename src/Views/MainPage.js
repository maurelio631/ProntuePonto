import React from "react";
import Sidebar from "../Components/Sidebar";
export default function MainPage(props) {
  return (
    <div>
      <div style={{height:"80px",width:"100%", background:"#2e2e2e"}}>
        <div style={{height:"50px", width:"50px", background:"#fff",display:"flex" , alignItems:"center", justifyContent:"center", marginTop:"20px"}}></div>
      </div>
      <Sidebar />
    </div>
  );
}
