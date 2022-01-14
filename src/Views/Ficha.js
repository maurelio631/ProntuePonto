import react from "react";
import styles from "./Ficha.module.css";
import LogoPep from "../Assets/img/LogoPeP.png";
import CalendarIcon from "../Assets/img/CalendarIcon.png"
import PatientIcon from "../Assets/img/PatientIcon.png";
import MoneyIcon from "../Assets/img/MoneyIcon.png";
import SettingsIcon from "../Assets/img/SettingsIcon.png";
export default function Ficha(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}>
                <div>
                    <img src={LogoPep} className={styles.logo}></img>
                </div>
                <div>
                    <img src={CalendarIcon} className={styles.calendarIcon}></img>
                </div>
                <div>
                    <img src={PatientIcon} className={styles.patientIcon}></img>
                </div>
                <div>
                    <img src={MoneyIcon} className={styles.sidebarImage}></img>
                </div>
                <div>
                    <img src={SettingsIcon} className={styles.sidebarImage}></img>
                </div>
            </div>
            <div className={styles.ficha}>
                <div className={styles.header}>
                    <div className={styles.clinicInfo}>
                        <div className={styles.clinicPicture}></div>
                        <div className={styles.clinicName}> <label>Clínica Nome</label></div>
                    </div>
                    <div className={styles.employeeInfo}>
                        <div className={styles.employeeName}><label>Nome do funcionário</label></div>
                        <div className={styles.employeePicture}></div>
                    </div>
                </div>
                <div className={styles.stepNameHighlight}>
                    <h4>Auto-Avaliação - Prontuário de atendimento de Quiropraxia</h4>
                </div>
                <form className={styles.formInfosPessoais} action="" method="POST">
                    <div className={styles.formGroup}>
                        <label>Nome</label>
                        <input placeholder="Insira seu nome"></input>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Data de nascimento</label>
                        <input type={"date"} placeholder="Insira sua data de nascimento"></input>
                    </div>

                    <div className={styles.formGroup}>
                        <label> Idade:</label><b>00</b>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Profissão</label>
                        <input placeholder="Ex: Desenvolvedor"></input>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Telefone/Celular</label>
                        <input></input>
                    </div>
                    <div className={styles.formGroup}>
                        <label>CPF</label>
                        <input placeholder="XXX.XXX.XXX-XX"></input>
                    </div>
                    <div className={styles.formGroup}>
                        <label>E-mail</label>
                        <input placeholder="seuemail@aqui.com"></input>
                    </div>
                    <div className={styles.formGroup}>

                        <label>Endereço</label>
                        <input></input>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Como nos conheceu?</label>
                        <select>
                            <option selected>Amigo</option>
                            <option>Outros</option>
                        </select>
                    </div>
                    <div className={styles.fichaFooter}>
                        <button className={styles.cancelButton}>Cancelar</button>
                        <div className={styles.progress}>Progresso da ficha</div>
                        <button className={styles.nextButton}>Continuar</button>
                    </div>
                </form>
            </div >
        </div >
    )
}