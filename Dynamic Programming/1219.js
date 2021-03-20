// 1219. Path with Maximum Gold
// In a gold mine grid of size m * n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

// Return the maximum amount of gold you can collect under the conditions:

// Every time you are located in a cell you will collect all the gold in that cell.
// From your position you can walk one step to the left, right, up or down.
// You can't visit the same cell more than once.
// Never visit a cell with 0 gold.
// You can start and stop collecting gold from any position in the grid that has some gold.

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var getMaximumGold = function(grid) {
    let max = 0
    for( let i = 0; i < grid.length; i++ ) {
        for( let j = 0; j < grid[i].length; j++ ) {
            const collected = backTrack(i, j)
            max = collected > max ? collected : max; 
        }
    }
    return max
    
    function backTrack( row, column ) {
        if(!grid[row] || !grid[row][column] || grid[row][column] === 0) return 0
        const up = row - 1, down = row + 1, left = column - 1, right = column + 1
        const curVal = grid[row][column]
        grid[row][column] = 0
        const goUp = backTrack(up , column)
        const goDown = backTrack(down , column)
        const goLeft = backTrack(row , left) 
        const goRight = backTrack(row , right)
        grid[row][column] = curVal
        return Math.max(goUp, goDown, goLeft, goRight) + curVal
        
    }
};