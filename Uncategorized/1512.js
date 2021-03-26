// 1512. Number of Good Pairs
// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let count = 0, numsObj = {}
    for(let i = 0; i < nums.length; i++) {
        let number = nums[i]
        if(numsObj[number]) count += numsObj[number]
        if(!numsObj[number]) numsObj[number] = 0
        numsObj[number] += 1
    }
    return count
};