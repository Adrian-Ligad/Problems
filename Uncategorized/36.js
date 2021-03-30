// 36. Valid Sudoku

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let objRow = {}, objCol = {}, objBox = {}
    for(let i = 0; i < board.length; i += 1){
        for(let j = 0; j < board[0].length; j += 1) {
            let numCheck = board[i][j]
            if(numCheck !== ".") {
                let rBox = Math.ceil((i + 1)/3), cBox = Math.ceil((j + 1)/3)
                if(objRow[i] && objRow[i][numCheck]) return false
                if(objCol[j] && objCol[j][numCheck]) return false
                if(objBox[rBox] && objBox[rBox][cBox] && objBox[rBox][cBox][numCheck]) return false
                
                //row
                if(!objRow[i]) objRow[i] = {}
                objRow[i][numCheck] = true
                
                //column
                if(!objCol[j]) objCol[j] = {}
                objCol[j][numCheck] = true
                
                //box
                if(!objBox[rBox]) objBox[rBox] = {}
                if(!objBox[rBox][cBox]) objBox[rBox][cBox] = {}
                objBox[rBox][cBox][numCheck] = true
            }
        }
    }
    return true
};