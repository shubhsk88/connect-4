import { useState } from 'react';
import { COL, ROW } from './constants'

import './App.css';
import Board from './components/Board';


function App() {
  const [board, setBoard] = useState(new Array(ROW).fill(new Array(COL).fill(0)))

  function insert(row, col, value) {
    board[row][col] = value;
    setBoard(board)
  }
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="py-10 text-6xl ">Connect 4 game</div>
      <Board board={board} />
      <button className="px-4 py-2 bg-purple-500 hover:bg-purple-700 text-white rounded shadow-lg my-6 text-4xl">Restart</button>
    </div>
  );
}

export default App;
