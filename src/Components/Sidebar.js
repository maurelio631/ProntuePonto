import React from "react";
import "../Components/Sidebar.module.css";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <img
        className="sidebarLogo"
        src={require("../Assets/img/LogoPeP.png")}
        alt="Prontu e ponto Logo"
        onClick={(e) => {
          e.preventDefault();
          console.log("Testando");
        }}
      />
      <img
        className="sidebarItem"
        src={require("../Assets/img/CalendarIcon.png")}
        alt="Verifique a agenda para disponibilidade de horários"
      />
      <img
        className="sidebarItem"
        src={require("../Assets/img/PatientIcon.png")}
        alt="Lista de pacientes"
      />
      <img
        className="sidebarItem"
        src={require("../Assets/img/MoneyIcon.png")}
        alt="Lista de pagamentos recebidos"
      />
      <img
        className="sidebarItem"
        src={require("../Assets/img/SettingsIcon.png")}
        alt="Acessar as configurações"
      />
    </div>
  );
}
