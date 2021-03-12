/*794. Valid Tic-Tac-Toe State
A Tic-Tac-Toe board is given as a string array board. Return True if and only if it is possible to reach this board 
position during the course of a valid tic-tac-toe game.

The board is a 3 x 3 array, and consists of characters " ", "X", and "O".  The " " character represents an empty square.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" ").
The first player always places "X" characters, while the second player always places "O" characters.
"X" and "O" characters are always placed into empty squares, never filled ones.
The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
*/

/**
 * @param {string[]} board
 * @return {boolean}
 */
 var validTicTacToe = function(board) {
    let result = checkNum()
    let [ xCount, oCount ] = result
    return checkWins(xCount, oCount)
    
    function checkWins(xCount, oCount) {
        if (oCount > xCount || xCount > oCount + 1) return false
        const isCheckRow = checkRow()
        const isCheckColumn = checkColumn()
        const isCheckDiag = checkDiag()
        if(!isCheckRow || !isCheckColumn) return false
        if(isCheckRow[0] === "X" || isCheckColumn[0] === "X" ) {
            if(xCount === oCount) return false
        }
        if(isCheckDiag === "O") {
            if(xCount !== oCount) return false
        }
        if(isCheckDiag === "X") {
            if(xCount <= oCount) return false
        }
        return true
    }
    
    function checkRow() {
        let xStreakAmount = 0, oStreakAmount = 0
        for(let i = 0; i < 3; i++) {
            let xStreak = 0, oStreak = 0 
            for(let j = 0; j < 3; j++) {
                if(board[i][j] === "X") xStreak++
                if(board[i][j] === "O") oStreak++
            }
            if(xStreak === 3) xStreakAmount++
            if(oStreak === 3) oStreakAmount++
        }
        if(xStreakAmount && oStreakAmount) return false
        return xStreakAmount > 0 ? ["X", xStreakAmount] : oStreakAmount > 0 ? ["O", oStreakAmount]   : true      
    }
    function checkColumn() {
        let xStreakAmount = 0, oStreakAmount = 0
        for(let i = 0; i < 3; i++) {
            let xStreak = 0, oStreak = 0 
            for(let j = 0; j < 3; j++) {
                if(board[j][i] === "X") xStreak++
                if(board[j][i] === "O") oStreak++
            }
            if(xStreak === 3) xStreakAmount++
            if(oStreak === 3) oStreakAmount++
        }
        if(xStreakAmount && oStreakAmount) return false
        return xStreakAmount > 0 ? ["X", xStreakAmount] : oStreakAmount > 0 ? ["O", oStreakAmount]   : true      
    }
    
    function checkDiag() {
        let xStreak = 0, oStreak = 0, i = 0, j = 0
        while(i < 3) {
            if(board[i][j] === "X") xStreak++
            if(board[i][j] === "O") oStreak++
            i++
            j++
        }
        if(xStreak === 3) return "X"
        if(oStreak === 3) return "O"
        xStreak = 0, oStreak = 0, i = 0, j = 2
        while(i < 3) {
            if(board[i][j] === "X") xStreak++
            if(board[i][j] === "O") oStreak++  
            i++
            j--
        }
        if(xStreak === 3) return "X"
        if(oStreak === 3) return "O"
    }
    
    function checkNum(xCounter = 0, oCounter = 0) {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if (board[i][j] === "X") xCounter++
                if(board[i][j] === "O") oCounter++
            }
        }
        return [xCounter, oCounter]
    }
};