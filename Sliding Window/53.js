/* 53. Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    if(nums.length === 0) return null
    let max = nums[0], curNum = nums[0] 
    let copyNums = [...nums]
    for(let i = 1; i < copyNums.length; i++) {
        if (nums[i - 1] > 0) nums[i] = nums[i] + nums[i - 1]
        max = Math.max(max, nums[i])
    }
    return max
};