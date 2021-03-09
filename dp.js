/* 70. Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

const dp70 = (n) => {
    return memoization(n)
    
    function memoization ( n, memo = {} ) {
        if(n <= 3) return n 
        if(!memo[n]) memo[n] = memoization(n - 1, memo) + memoization(n - 2, memo)
        return memo[n]
    }
}

/*746. Min Cost Climbing Stairs
On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, 
and you can either start from the step with index 0, or the step with index 1.
*/

const dp746 = (cost) => {
    let beforeOne = cost[1], beforeTwo = cost[0];
    for(let i = 2; i < cost.length; i++) {
        let current = cost[i] + Math.min(beforeOne, beforeTwo)
        beforeTwo = beforeOne;
        beforeOne = current;
    }
    return Math.min(beforeOne, beforeTwo)
}
/*62. Unique Paths
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time. The robot is trying to reach 
the bottom-right corner of the grid (marked 'Finish' in the diagram below).
How many possible unique paths are there?
*/
const dp62 = (m, n) => {
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