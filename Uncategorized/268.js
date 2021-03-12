/* 268. Missing Number
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    nums.push(true);
    for(let i = 0; i < nums.length; i++) {
        let indexNumber = nums[i];
        let holdNum;
        while(nums[indexNumber] !== true) {
            holdNum = nums[indexNumber];
            nums[indexNumber] = true;
            indexNumber = ;
        }
    }
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== true) return i;
    }
    return nums.length - 1
    
    
};