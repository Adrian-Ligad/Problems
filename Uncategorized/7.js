// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value 
// to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let reverseX = 0, copyX = Math.abs(x), isFalse = x < 0 ? true : false
    while (copyX >= 1) {
        let num = copyX % 10
        copyX = Math.floor(copyX/10)
        reverseX = (reverseX * 10) + num
    }
    reverseX = isFalse === true ? -reverseX : reverseX
    if(reverseX < -Math.pow(2,31) || reverseX > Math.pow(2,31) - 1) reverseX = 0
    return reverseX
};