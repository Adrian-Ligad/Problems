// 1374. Generate a String With Characters That Have Odd Counts
// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

 /**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    if(n === 1) return "q"
    let result = "", nCopy = n
    while(nCopy-- > 1) result += "p"
    return n % 2 === 0 ? result + "z" : result.slice(0, result.length - 1) + "zq"
};