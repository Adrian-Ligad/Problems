// 1413. Minimum Value to Get Positive Step by Step Sum

// Given an array of integers nums, you start with an initial positive value startValue.

// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

const minStartValue = (nums) => {
    let current = 0
    let lowest = Infinity
    
    for(const num of nums) {
        current += num
        lowest = Math.min(current, lowest)
    }
    return Math.max(1 - lowest, 1)
};