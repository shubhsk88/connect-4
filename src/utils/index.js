import { ROW, COL } from '../constants'

export const isValid = (board, col) => board[ROW - 1][col] === 0


/**
 * 
 * @param {number[][]} board 
 * @param {number} col
 * @returns {number} 
 */
export const getRowIdx = (board, col) => {

    for (let start = 0; start < ROW; start++) {
        if (board[start][col] === 0) return start;
    }
}

//Using stackoverflow

/**
 * @returns {number[][]}
 */
export const createArray = () => {
    const arr = new Array(ROW);
    for (let i = 0; i < arr.length; i += 1) {
        arr[i] = new Array(COL);

    }
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;

}


/**
 * 
 * @param {number} input
 * @returns {string} 
 */
export const getColorValue = (input) => {
    let x = 'element bg-white';
    if (input === 1) x = 'element bg-red-400';
    else if (input === 2) x = 'element bg-blue-400'

    return x;
}

/**
 * 
 * @param {number} item 
 * @param {number[][]} board 
 * @return {boolean}
 */

export const checkWinner = (item, board) => {

    //Checkin the horizontol field 
    for (let row = 0; row < ROW; row++) {
        for (let col = 0; col < COL - 3; col++) {
            if (board[row][col] === item && board[row][col + 1] === item && board[row][col + 2] === item && board[row][col + 3] === item) return true;
        }
    }

    //Check the vertical field for matching
    for (let row = 0; row < ROW - 3; row++) {
        for (let col = 0; col < COL; col++) {
            if (board[row][col] === item && board[row + 1][col] === item && board[row + 2][col] === item && board[row + 3][col] === item) return true;
        }
    }
    //Checking the diagonally
    for (let row = 0; row < ROW - 3; row++) {
        for (let col = 0; col < COL - 3; col++) {
            if (board[row][col] === item && board[row + 1][col + 1] === item && board[row + 2][col + 2] === item && board[row + 3][col + 3] === item) return true;
        }
    }
    // Checking the inverse diagonality ,using stack Overflow
    for (let row = 3; row < ROW; row++) {
        for (let col = 0; col < COL - 3; col++) {
            if (board[row][col] === item && board[row - 1][col + 1] === item && board[row - 2][col + 2] === item && board[row - 3][col + 3] === item) return true;
        }
    }


    return false;

}