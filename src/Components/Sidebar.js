import react from "react";
import styles from "./Sidebar.module.css";
import LogoPep from "../Assets/img/LogoPeP.png";
import CalendarIcon from "../Assets/img/CalendarIcon.png"
import PatientIcon from "../Assets/img/PatientIcon.png";
import MoneyIcon from "../Assets/img/MoneyIcon.png";
import SettingsIcon from "../Assets/img/SettingsIcon.png";

export default function Sidebar(props) {
    return (
        <ul className={styles.sidebar}>
            <li>
                <a href=""  ><img className={styles.Logo} src={LogoPep} /></a>
            </li>
            <li>
                <a href="" ><img className={styles.CalendarIcon} src={CalendarIcon} /></a>
            </li>
            <li>
                <a href=""><img src={PatientIcon} /></a>
            </li>
            <li>
                <a href="" ><img src={MoneyIcon} /></a>
            </li>
            <li>
                <a href=""> <img src={SettingsIcon} /></a>
            </li>
        </ul>
    )
}