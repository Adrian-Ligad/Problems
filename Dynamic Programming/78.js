// 78. Subsets
// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let resultArr = [[]], mySet = new Set()
    backTrack(0)
    return resultArr
    
    function backTrack(integer) {
        for(let i = integer; i < nums.length; i++) {
            let num = nums[i]
            mySet.add(num)
            resultArr.push([...mySet])
            backTrack(i + 1)
            mySet.delete(num)
        }
    }
    return resultArr
};

// bfs
   // let resultArr = [];
   //  resultArr.push([])
   //  for(let i = 0; i < nums.length; i++) {
   //      let number = nums[i];
   //      let resultNum = resultArr.length;
   //      for(let j = 0; j < resultNum; j++) {
   //          let copy = resultArr[j].slice(0)
   //          copy.push(number)
   //          resultArr.push(copy)
   //      }
   //  }
   //  return resultArr
