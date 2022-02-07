import react from "react";
import styles from "./Ficha.module.css";
import LogoPep from "../Assets/img/LogoPeP.png";
import CalendarIcon from "../Assets/img/CalendarIcon.png"
import PatientIcon from "../Assets/img/PatientIcon.png";
import MoneyIcon from "../Assets/img/MoneyIcon.png";
import SettingsIcon from "../Assets/img/SettingsIcon.png";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Ficha(props) {
    return (
        <div className={styles.wrapper}>
            <Sidebar/>
            <div className={styles.ficha}>
                <Header/>
                    <div className={styles.stepNameHighlight}>
                        <h4>Auto-Avaliação - Prontuário de atendimento de Quiropraxia</h4>
                    </div>
               
                <form className={styles.formInfosPessoais} action="http://localhost:3001" method="POST">
                    <div className={styles.formGroup}>
                        <label>Nome</label>
                        <input type={"text"} placeholder="Insira seu nome"></input>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Data de nascimento</label>
                        <input type={"date"} placeholder="Insira sua data de nascimento"></input>
                        <label> Idade:</label><b>00</b>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Profissão</label>
                        <input type={"text"} placeholder="Ex: Desenvolvedor"></input>
                    </div>

                    <div className={styles.formGroup}>
                        <label >Telefone/Celular</label>
                        <input type={"text"}></input>
                    </div>
                    <div className={styles.formGroup}>
                        <label>CPF</label>
                        <input cpf placeholder="XXX.XXX.XXX-XX"></input>
                    </div>
                    <div className={styles.formGroup}>
                        <label>E-mail</label>
                        <input type={"text"} placeholder="seuemail@aqui.com"></input>
                    </div>
                    <div className={styles.formGroup}>

                        <label>Endereço</label>
                        <input type={"text"}></input>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Como nos conheceu?</label>
                        <input type={"text"}></input>
                    </div>
                </form>
                    <Footer/>
            </div >
        </div >
    )
}