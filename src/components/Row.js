
import React from 'react'
import Cell from './Cell'

const Row = ({ row }) => {
    return (
        <div className="flex">
            {row.map((element, idx) => <Cell key={idx} colIdx={idx} element={element} />)}
        </div>
    )
}

export default Row
