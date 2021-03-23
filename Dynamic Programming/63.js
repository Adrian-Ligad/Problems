// 63. Unique Paths II

// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. 
// The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and space is marked as 1 and 0 respectively in the grid.

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    let cons =  recursion(0,0)
    return cons
    
    function recursion(row, column, memo = {}) {
        let down = row + 1, right = column + 1
        if(obstacleGrid[row] === undefined || obstacleGrid[row][column] === undefined || obstacleGrid[row][column] === 1) return 0
        if(row === obstacleGrid.length - 1 && column === obstacleGrid[0].length - 1) return 1
        if(memo[row + 1] && memo[row + 1][column + 1]) return memo[row + 1][column + 1]
        let isDown = recursion(down, column, memo)
        let isRight = recursion(row, right, memo)
        if(!memo[row + 1]) memo[row + 1] = {}
        memo[row + 1][column + 1] = isDown + isRight
        return memo[row + 1][column + 1]
    }
};