import React from "react";
import styles from "./RestartButton.module.css"

const RestartButton = ({ restart }) => {
    return <button className={styles.button} onClick={restart}>Reiniciar Jogo</button>;
};

export default RestartButton;
