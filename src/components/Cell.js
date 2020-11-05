import React, { useContext } from 'react'
import PlayContext from '../context/PlayContext'


const Cell = ({ element }) => {
    const play = useContext(PlayContext)

    return (
        <div className="cell">
            <div className="element"></div>
        </div>
    )
}

export default Cell
