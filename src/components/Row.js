
import React from 'react'
import Cell from './Cell'

const Row = ({ row }) => {
    return (
        <div>
            {row.map((element, idx) => <Cell key={idx} element={element} />)}
        </div>
    )
}

export default Row
