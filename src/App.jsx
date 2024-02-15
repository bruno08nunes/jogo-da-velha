import { useState } from "react";
import styles from "./App.module.css";
import Board from "./components/Board";
import RestartButton from "./components/RestartButton";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";

function App() {
    const [isXTime, setIsXTime] = useState(true);
    const [winner, setWinner] = useState(false);
    const [draw, setDraw] = useState(false);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winnerSequence, setWinnerSequence] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (localStorage.getItem("isDarkMode") !== null) {
            return localStorage.getItem("isDarkMode") === "false";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    const restartGame = () => {
        setWinner(false);
        setDraw(false);
        setSquares(Array(9).fill(null));
        setWinnerSequence([]);
    };

    const checkWinner = (squares) => {
        const winnerCombinations = [
            [0, 1, 2],
            [0, 4, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8],
        ];

        for (let pos in winnerCombinations) {
            let [pos1, pos2, pos3] = winnerCombinations[pos];
            if (
                squares[pos1] !== null &&
                squares[pos1] === squares[pos2] &&
                squares[pos1] === squares[pos3]
            ) {
                setWinner(squares[pos1]);
                setWinnerSequence(winnerCombinations[pos]);
                return squares[pos1];
            }
        }
        return null;
    };

    const changeDarkMode = (e) => {
        localStorage.setItem("isDarkMode", isDarkMode);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <header className={styles.header}>
                <h1>Jogo da Velha</h1>
                <button
                    onClick={changeDarkMode}
                    className={isDarkMode ? "dark" : "light"}
                    aria-label={
                        isDarkMode
                            ? "Change to light mode"
                            : "Change to dark mode"
                    }
                >
                    {isDarkMode ? <FaRegMoon /> : <FaRegSun />}
                </button>
            </header>
            <h2 className={styles.titulo}>
                {winner
                    ? winner + " venceu!"
                    : draw
                    ? "Empate"
                    : `Vez de ${isXTime ? "X" : "O"}`}
            </h2>
            <main className={styles.main}>
                <Board
                    isXTime={isXTime}
                    setIsXTime={setIsXTime}
                    checkWinner={checkWinner}
                    winner={winner}
                    setDraw={setDraw}
                    setSquares={setSquares}
                    squares={squares}
                    winnerSequence={winnerSequence}
                />
                {(draw || winner) && <RestartButton restart={restartGame} />}
            </main>
            <footer className={styles.footer}>
                <address>&copy; Bruno Nunes</address>
            </footer>
        </>
    );
}

export default App;
