// 1380. Lucky Numbers in a Matrix

// Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var luckyNumbers  = function(matrix) {
    let result = []
    let minObj = []
    for(let row of matrix) {
        let min = Math.min(...row)
        minObj[min] = true;
    }
    
    for( let i = 0; i < matrix[0].length; i++ ) {
        let max = -Infinity
        for( let j = 0; j < matrix.length; j++ ) {
            if(matrix[j][i] > max) max = matrix[j][i]
        }
        if(minObj[max]) result.push(max)
    }
    return result
};