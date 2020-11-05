import React from 'react'
import Row from './Row'


const Board = ({ board }) => {


    return (
        <div>
            {board.map((row, idx) => <Row key={idx} row={row} />)}
        </div>
    )
}

export default Board
