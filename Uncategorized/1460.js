// 1460. Make Two Arrays Equal by Reversing Sub-arrays
// Given two integer arrays of equal length target and arr.

// In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.

// Return True if you can make arr equal to target, or False otherwise.

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 var canBeEqual = function(target, arr) {
    let objectData = {}
    for(let num of target) {
        if(!objectData[num]) objectData[num] = 0
        objectData[num] += 1
    }
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if(!objectData[num]) return false
        objectData[num] -= 1
    }
    for(let number in objectData) {
        if (objectData[number]) return false
    }
    return true
};