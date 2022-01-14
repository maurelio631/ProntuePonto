import react from "react";
import styles from "./Ficha.module.css";
import LogoPep from "../Assets/img/LogoPeP.png";
export default function Ficha(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}>
                <img src={LogoPep} className={styles.logo}></img>
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
                <div className={styles.formInfosPessoais}>
                    <div>
                        <div >
                            <label>Nome</label>
                            <input placeholder="Insira seu nome"></input>
                        </div>
                        <div>
                            <div>
                                <label>Data de nascimento</label>
                                <input placeholder="Insira sua data de nascimento"></input>
                            </div>
                            <div>
                                <label> Idade:</label><b>21</b>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Profissão</label>
                        <input placeholder="Ex: Desenvolvedor"></input>
                    </div>
                    <div>
                        <label>Telefone/Celular</label>
                        <input></input>
                    </div>
                    <div>
                        <label>CPF</label>
                        <input placeholder="XXX.XXX.XXX-XX"></input>
                    </div>
                    <div>
                        <label>E-mail</label>
                        <input placeholder="seuemail@aqui.com"></input>
                    </div>
                    <div>
                        <label>Endereço</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Como nos conheceu?</label>
                        <select>
                            <option selected>Amigo</option>
                            <option>Outros</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}