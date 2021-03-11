/*62. Unique Paths
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time. The robot is trying to reach 
the bottom-right corner of the grid (marked 'Finish' in the diagram below).
How many possible unique paths are there?
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    return backTrack(1, 1)
    
    function backTrack(row, column, memo = {}) {
        if(row > m || column > n) return 0
        if(row === m && column === n) return 1
        if(memo[row] && memo[row][column]) return memo[row][column]
        
        const down = row + 1, right = column + 1;
        const downMemo = backTrack (down, column, memo)
        const rightMemo = backTrack(row, right, memo)
        if(!memo[row]) memo[row] = {}
        if(!memo[row][column]) memo[row][column] = downMemo + rightMemo
        return memo[row][column]
    }
};