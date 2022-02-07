import react from "react";
import styles from "./LocalDor.module.css";
import MeuHeader from "../Components/Header";
import Footer from "../Components/Footer";
import Wrapper from "../Components/Wrapper";

export default function LocalDor(props) {
    return (
        <Wrapper>
            <div className={styles.container}>
                <h4>Selecione os botões que correspondem com as áreas afetadas</h4>
                <div className={styles.corpoHumano}>
                    <div><button>cabeça</button></div>
                    <div><button>Ombro E.</button><button>Torso</button><button>Ombro D.</button></div>
                    <div><button>Barriga</button></div>
                    <div><button>Quadril</button></div>
                    <div><button>Perna E.</button><button>Perna D.</button></div>
                    <div><button>Pé E.</button><button>Pé D</button></div>
                </div>
            </div>
        </Wrapper>
    )
}