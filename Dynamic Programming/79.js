// 79. Word Search

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are 
// horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Note: There will be some test cases with a board or a word larger than constraints to test if your solution is using pruning.

 /**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(let i  = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            let isTrue = terrainCrosser(i, j)
            if(isTrue) return true
        }
    }
    return false
    
    function terrainCrosser(i, j, depth = 0) {
        if(isOutOfBounds(i, j) || board[i][j] !== word[depth]) return false
        if(depth === word.length - 1) return true
        const keeper = board[i][j]
        board[i][j] = -1
        const up = i - 1, down = i + 1, left = j - 1, right = j + 1
        const isUp = terrainCrosser(up, j, depth + 1)
        const isDown =terrainCrosser(down, j, depth + 1)
        const isLeft = terrainCrosser(i, left, depth + 1)
        const isRight =terrainCrosser(i, right, depth + 1)
        if(isUp || isDown || isLeft || isRight) return true
        board[i][j] = keeper
        return false
    }
    
    function isOutOfBounds(i, j)  {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return true
        return false
    }
};