import React from 'react'


const Board = ({ board }) => {


    return (
        <div>
            {board.map((row, idx) => <div>Row</div>)}
        </div>
    )
}

export default Board
