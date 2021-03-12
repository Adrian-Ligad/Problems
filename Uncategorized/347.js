/* 347. Top K Frequent Elements
Given a non-empty array of integers, return the k most frequent elements.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let mostFrequent = [], frequentMap = {}, frequentArray = [];
    for(let num of nums) if (!++frequentMap[num]) frequentMap[num] = 0;
    for(let number in frequentMap) frequentArray.push([ number , frequentMap[number] ]);
    frequentArray.sort((a,b) => b[1] - a[1]);
    while( k-- ) mostFrequent.push(frequentArray.shift()[0]);
    return mostFrequent
};