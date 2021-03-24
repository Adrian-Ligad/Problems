// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    nums = nums.sort()
    for(let i = 0; i < nums.length; i += 2) {
        if(nums[i] !== nums[i + 1]) return nums[i]
    }
};

// // object lookup
//     let obj = {}
//     for (let num of nums) {
//         if(obj[num]) delete obj[num]
//         else obj[num] = 1
//     }
//     return Object.keys(obj)[0]