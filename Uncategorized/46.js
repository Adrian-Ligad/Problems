// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let result = []
    recursion(nums)
    return result
    
    function recursion(numsArray, numsObject = {}, keeperArr = []) {
        if(Object.keys(numsObject).length === numsArray.length) {
            result.push([...keeperArr])
            return
        }
        for(let num of numsArray) {
            if(!numsObject[num]) {
                numsObject[num] = true
                keeperArr.push(num)
                recursion(numsArray, numsObject, keeperArr)
                delete numsObject[num]
                keeperArr.pop()
            }
        }
    }
    
};