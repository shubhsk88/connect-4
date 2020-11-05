import React from 'react'

const Instruction = () => {
    return (
        <div className="flex  mb-16" >
            <div className=" flex mx-4 items-center">
                <h2 className="text-4xl font-bold">Player 1:</h2>
                <div className="w-16 h-16 mx-2 bg-red-400 rounded-full" />
            </div>
            <div className="mx-4 flex items-center ">
                
                <h2 className="text-4xl font-bold">

                Player 2:
                
                </h2>
                <div className="w-16 h-16  mx-2 bg-blue-400 rounded-full" />
            </div>

        </div>
    )
}

export default Instruction;
