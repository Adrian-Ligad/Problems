// 1295. Find Numbers with Even Number of Digits

// Given an array nums of integers, return how many of them contain an even number of digits.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let result = 0
    for(let num of nums) {
        let count = 0, copyNum = num
        while(copyNum >= 1) {
            copyNum /= 10
            count++
        }
        if(count % 2 === 0) result++
    }
    return result
};