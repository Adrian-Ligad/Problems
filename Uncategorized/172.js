// 172. Factorial Trailing Zeroes
// Given an integer n, return the number of trailing zeroes in n!.

// Follow up: Could you write a solution that works in logarithmic time complexity?

/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
    let result = 0
    for(let i = 5; i <= n; i+= 5) {
        let curNum = i
        while ( curNum % 5  === 0) {
            result++
            curNum /= 5
        }
    }
    return result
};

