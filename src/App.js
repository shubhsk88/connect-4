import { useState } from 'react';
import { COL, ROW } from './constants'

import './App.css';
import Board from './components/Board';

function App() {
  const [board, setBoard] = useState(new Array(ROW).fill(new Array(COL).fill(0)))
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      Connect 4 game
      <Board board={board} />
      <button>Restart</button>
    </div>
  );
}

export default App;
