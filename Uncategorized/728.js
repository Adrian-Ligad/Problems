// 728. Self Dividing Numbers

// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    let result = []
    for(let i = left; i <= right; i++) {
        let separateNums = i.toString().split(""), isSelfDividing = true
        separateNums.forEach(numString => parseInt(numString))
        for(let num of separateNums) {
            if(i % num !== 0) {
                isSelfDividing = false
            }
        }
        if( isSelfDividing ) result.push(i)
    }
    return result
};