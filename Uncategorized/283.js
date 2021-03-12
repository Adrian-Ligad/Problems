/*283 Move Zeroes
    Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let curPointer = 0, slowPointer = 0;
    while(curPointer !== nums.length) {
        if(nums[curPointer] !== 0) {
            const holder = nums[slowPointer]
            nums[slowPointer] = nums[curPointer]
            nums[curPointer] = holder;
            slowPointer++
        }
        curPointer++
    }
    return nums
};