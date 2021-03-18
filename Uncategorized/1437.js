// 1437. Check If All 1's Are at Least Length K Places Away


// Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var kLengthApart = function(nums, k) {
    let count;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            if( count < k) return false
            count = 0
        } 
        else if(count !== undefined) count++
    }
    return true
};