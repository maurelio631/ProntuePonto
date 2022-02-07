import react from "react";
import styles from "./Footer.module.css";
import LogoPep from "../Assets/img/LogoPeP.png";
import CalendarIcon from "../Assets/img/CalendarIcon.png"
import PatientIcon from "../Assets/img/PatientIcon.png";
import MoneyIcon from "../Assets/img/MoneyIcon.png";
import SettingsIcon from "../Assets/img/SettingsIcon.png";

export default function Footer(props) {
    return (
        <div className={styles.footer}>
            <button className={styles.btnCancel}>Cancelar</button>
            <div className={styles.progress}>Progresso da ficha</div>
            <button className={styles.btnContinue}>Continuar</button>
        </div>
    )
}