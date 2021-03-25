// 287. Find the Duplicate Number
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.
/**
 * @param {number[]} nums
 * @return {number}
 */
//tortoise hare combo
 var findDuplicate = function(nums) {
    let pointer1 = nums[0]
    let pointer2 = nums[0]
    
    do {
        pointer1 = nums[pointer1]
        pointer2 = nums[nums[pointer2]]
    } while (pointer1 !== pointer2)
    pointer1 = nums[0]
    while(pointer1 !== pointer2) {
        pointer1 = nums[pointer1]
        pointer2 = nums[pointer2]
    }
    return pointer1
};

    // nums.sort((a,b) => a - b)
    // for(let i = 0; i < nums.length; i += 1) {
    //     if(nums[i] === nums[i + 1]) return nums[i]
    // }