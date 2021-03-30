// 118. Pascal's Triangle
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    
    let result = [[1]], i = 1
    while(i < numRows) {
        i += 1
        let currentArray = [1]
        let lastRow = result[result.length - 1]
        for(let j = 1; j < lastRow.length; j++) {
            currentArray.push(lastRow[j] + lastRow[j - 1])
        }
        currentArray.push(1)
        result.push([...currentArray])
    }
    return result
};