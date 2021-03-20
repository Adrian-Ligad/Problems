// 47. Permutations II

// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    let result = [];
    let numObj = {}
    for(let num of nums) {
        if(!numObj[num]) numObj[num] = 0
        numObj[num] += 1
    }
    backTrack()
    return result
    
    function backTrack(resultArray = []) {
        if(Object.keys(numObj).length < 1) result.push([...resultArray]) 
        for(let num in numObj) {
            numObj[num] -= 1
            if(numObj[num]  < 1) delete numObj[num]
            resultArray.push(num)
            backTrack(resultArray)
            if(!numObj[num])numObj[num] = 0
            numObj[num] += 1
            resultArray.pop()
        }
    }
};