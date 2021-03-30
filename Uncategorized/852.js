// 852. Peak Index in a Mountain Array
// Let's call an array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, 
// return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        let backwards = i === 0  ? -Infinity : arr[i - 1]
        let forwards = i === arr.length - 1 ? - Infinity : arr[i + 1]
        if(arr[i] > backwards && arr[i] > forwards) return i
    }
};