// 48. Rotate Image

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
// DO NOT allocate another 2D matrix and do the rotation.
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(board) {
    //flip 
    for(let i = 0; i < board.length; i += 1) {
        for(let j = i; j <board.length; j += 1) {
            let previous = board[i][j]
            board[i][j] = board[j][i]
            board[j][i] = previous
        }
    }
    //reverse
    for(let i = 0; i < board.length; i += 1) {
        for(let j = 0; j < Math.floor(board[0].length / 2); j += 1) {
            let temp = board[i][j]
            board[i][j] = board[i][board[0].length - j - 1]
            board[i][board[0].length - j - 1] = temp
        }   
    }
};