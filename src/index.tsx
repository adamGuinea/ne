import React, { useState, Fragment, useEffect } from "react";
import ReactDOM from "react-dom";

import { checkResult } from "./utils/GameLogic";
import Header from "./components/Header";
import Board from "./components/Board";

const Main = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [board, setBoard] = useState([]);
  const [gameResult, setGameResult] = useState("");
  const [gameStatus, setGameStatus] = useState("");

  useEffect(() => initBoard(), []);

  const initBoard = () => {
    let newBoard = [];
    for (let row = 0; row < 6; ++row) {
      let rows = [];
      for (let col = 0; col < 7; ++col) {
        rows.push(null);
      }
      newBoard.push(rows);
    }

    /* Setting initial state */
    setBoard(newBoard);
    setPlayer1("player1");
    setPlayer2("player2");
    setCurrentPlayer("player1");
    setGameResult("");
  };

  const playGame = col => {
    if (gameResult) {
      setGameStatus("Game over");
    } else {
      for (let row = 5; row >= 0; --row) {
        if (!board[row][col]) {
          board[row][col] = currentPlayer;
          break;
        }
      }

      let result = checkResult(board);
      /* Declare the winner  if any or change the turn */
      if (result === player1) {
        setGameResult("Player 1 wins");
      } else if (result === player2) {
        setGameResult("Player 2 wins");
      } else if (result === "Tie") {
        setGameResult("Tie");
      } else {
        changeTurn(currentPlayer);
      }
    }
  };

  const changeTurn = currentPlayerPlaying =>
    currentPlayerPlaying === player1
      ? setCurrentPlayer(player2)
      : setCurrentPlayer(player1);

  return (
    <Fragment>
      <Header />
      <div>
        <table>
          <tbody>
            {board.map((row, i) => (
              <Board key={i} row={row} game={playGame} />
            ))}
          </tbody>
        </table>
        <div className='lower-panel'>
          <div className='player-details'>
            <span>
              {gameResult && (
                <div className={"winner"}> {`${currentPlayer} Wins`}</div>
              )}
            </span>
          </div>
          <button
            className='button'
            onClick={() => {
              initBoard();
            }}
          >
            {"New Game"}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const container = document.getElementById("root");
ReactDOM.render(<Main />, container);
