/*70. Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    return memoization(n)
    
    function memoization ( n, memo = {} ) {
        if(n <= 3) return n 
        if(!memo[n]) memo[n] = memoization(n - 1, memo) + memoization(n - 2, memo)
        return memo[n]
    }
};