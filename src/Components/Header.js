import react from "react";
import styles from "./Header.module.css";

export default function Header(props) {
    return (<div className={styles.header}>
        <div className={styles.clinicInfo}>
            <div className={styles.clinicPicture}></div>
            <div className={styles.clinicName}> <label>Clínica Nome</label></div>
        </div>
        <div className={styles.employeeInfo}>
            <div className={styles.employeeName}><label>Nome do funcionário</label></div>
            <div className={styles.employeePicture}></div>
        </div>
    </div>
    )
}