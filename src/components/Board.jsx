import React from "react";
import Square from "./Square";
import { useState } from "react";

import styles from "./Board.module.css";

const Board = ({ isXTime, setIsXTime, checkWinner, winner, setDraw, setSquares, squares, winnerSequence }) => {
    const checkSquareHaveValue = (number) => squares[number]

    const checkDraw = (newPlay) => !newPlay.includes(null)
    
    const play = (number) => {
        if (winner) {
            return;
        }
        
        if (checkSquareHaveValue(number)) {
            return;
        }
        
        const newPlay = [...squares];
        newPlay[number] = isXTime ? "X" : "O";
        setSquares(newPlay);
        setIsXTime(!isXTime);
        
        if (checkDraw(newPlay)) {
            setDraw(true);
        }

        if (checkWinner(newPlay)) {
            return;
        }
    };

    return (
        <section className={`${styles.board} ${winner || checkDraw(squares) ? styles.winner : ""}`}>
            {squares.map((square, key) => (
                <Square key={key} value={square} onPlay={play} number={key} winnerSequence={winnerSequence} />
            ))}
        </section>
    );
};

export default Board;
