import React, { useContext } from 'react'
import PlayContext from '../context/PlayContext'
import { getColorValue } from '../utils'


const Cell = ({ element, colIdx }) => {
    const play = useContext(PlayContext);
    const onClick = () => {
        play(colIdx)
    }
    const color = getColorValue(element)
    return (
        <div className="cell" onClick={onClick}>
            <div className={color}></div>
        </div>
    )
}

export default Cell
