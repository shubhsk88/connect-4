import { useState } from 'react';
import { COL, ROW } from './constants'

import './App.css';
import Board from './components/Board';
import { checkWinner, createArray, getRowIdx, isValid } from './utils';
import PlayContext from './context/PlayContext';




function App() {
  const [board, setBoard] = useState(() => createArray())
  const [turn, setTurn] = useState(0);
  const [result, setResult] = useState(null);
  const [isOver, setIsOver] = useState(false);
  function insert(row, col, value) {
    board[row][col] = value;
    setBoard(board)
  }
  function play(col) {
    if (isValid(board, col)) {
      const player = turn % 2 + 1;
      const rowIdx = getRowIdx(board, col);
      insert(rowIdx, col, player)
      setTurn(turn + 1);
      if (checkWinner(player, board)) {
        setIsOver(true)
        if (player === 1) {
          setResult('Yay Player 1 Wins')
        }
        else if (player === 2) {
          setResult('Yay Player 2 Wins')
        }
      }



    }

  }
  console.log(board)

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="py-10 text-6xl ">Connect 4 game</div>
      
      <PlayContext.Provider value={play}>

        <Board board={board} />
      </PlayContext.Provider>
      <button className="px-4 py-2 bg-purple-500 hover:bg-purple-700 text-white rounded shadow-lg my-6 text-4xl">Restart</button>

    </div>
  );
}

export default App;
