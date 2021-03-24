// 1207. Unique Number of Occurrences

// Given an array of integers arr, 
// write a function that returns true if and only if the number of occurrences of each value in the array is unique.
/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    let arrObj = {}, isSeen = {}
    for(let number of arr) {
        if(!arrObj[number]) arrObj[number] = 0
        arrObj[number] += 1
    }
    for(let number in arrObj) {
        if (isSeen[arrObj[number]]) return false
        isSeen[arrObj[number]] = true
    }
    return true
};