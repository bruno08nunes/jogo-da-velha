import React from "react";
import styles from "./Square.module.css";

const Square = ({ value, onPlay, number, winnerSequence }) => {
    const checkSequence = () => winnerSequence.includes(number);

    return (
        <button
            onClick={() => onPlay(number)}
            className={checkSequence() ? styles.winner : ""}
            aria-label={value ?? "Selecionar quadrado"}
        >
            {value}
        </button>
    );
};

export default Square;
