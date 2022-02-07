import react from "react";
import styles from "../Components/Wrapper.module.css";

export default function Wrapper(props) {
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}