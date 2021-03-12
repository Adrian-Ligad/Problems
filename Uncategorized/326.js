/* 326. Power of Three
Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    if(n === 0) return false
    let number = n
    while(number % 3 === 0 ) number = number / 3
    return number === 1 ? true : false;
};