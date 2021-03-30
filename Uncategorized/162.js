// 162. Find Peak Element

// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index. 
// If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞.
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let backwards = i === 0  ? -Infinity : nums[i - 1]
        let forwards = i === nums.length - 1 ? - Infinity : nums[i + 1]
        if(nums[i] > backwards && nums[i] > forwards) return i
    }
};