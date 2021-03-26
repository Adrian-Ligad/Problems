// 202. Happy Number

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.
/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let cache = {}
    while(n !== 1) {
        if(cache[n]) return false
        cache[n] = true
        n = n
            .toString()
            .split("")
            .reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0)
    }
    return true;
};
