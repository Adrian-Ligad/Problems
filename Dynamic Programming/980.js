// 980. Unique Paths III

// On a 2-dimensional grid, there are 4 types of squares:

// 1 represents the starting square.  There is exactly one starting square.
// 2 represents the ending square.  There is exactly one ending square.
// 0 represents empty squares we can walk over.
// -1 represents obstacles that we cannot walk over.
// Return the number of 4-directional walks from the starting square to the ending square, 
// that walk over every non-obstacle square exactly once.

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var uniquePathsIII = function(originGrid) {
    let numAllowed = originGrid.length * originGrid[0].length, startingIndex
    for( let i = 0; i < originGrid.length; i++ ) {
        for( let j = 0; j < originGrid[i].length; j++ ) {
            if( originGrid[i][j] === -1 ) numAllowed -= 1 
            if(originGrid[i][j] === 1) startingIndex = [i, j]
        }
    }
    return backTrack( startingIndex[0], startingIndex[1], originGrid, numAllowed )
    
    function backTrack(row, column, grid, numLeft) {
        if( grid[row] === undefined || grid[row][column] === undefined || grid[row][column] === -1 ) return 0;
        if( grid[row][column] === 2 && numLeft > 1 ) return 0;
        if( grid[row][column] === 2 && numLeft === 1 ) return 1;
        let gridCopy = grid[row][column]
        grid[row][column] = -1
        let numLeftCopy = numLeft - 1
        let up = row - 1, down = row + 1, left = column - 1, right = column + 1
        let goUp = backTrack(up, column, grid, numLeftCopy)
        let goDown = backTrack(down, column, grid, numLeftCopy)
        let goLeft = backTrack(row, left, grid, numLeftCopy)
        let goRight = backTrack(row, right, grid, numLeftCopy)
        grid[row][column] = gridCopy
        return goUp + goDown + goLeft + goRight     
    }
};