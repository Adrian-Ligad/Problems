// 122. Best Time to Buy and Sell Stock II
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like 
// (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let output = 0, i = 0, valley = prices[0], peak = prices[0]
    while( i < prices.length) {
        while(prices[i + 1] < prices[i]) i++
        valley = prices[i]
        while(prices[i + 1] > prices[i]) i++
        peak = prices[i]
        output += peak - valley
        i++
    }
    return output
};

// var maxProfit = function(prices) {
//     let profit = 0;
//     let left = 0, right = 0;
//     while (right < prices.length) {
//         if(prices[right + 1] < prices[right] || right + 1 === prices.length) {
//             profit += prices[right] - prices[left]
//             left = right + 1
//         }
//         ++right
//     }
//     return profit
// };