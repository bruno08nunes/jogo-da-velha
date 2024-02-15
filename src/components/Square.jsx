import React from "react";
import styles from "./Square.module.css";

const Square = ({ value, onPlay, number, winnerSequence }) => {
    const checkSequence = () => winnerSequence.includes(number);

    return (
        <div
            onClick={() => onPlay(number)}
            className={checkSequence() ? styles.winner : ""}
        >
            {value}
        </div>
    );
};

export default Square;
