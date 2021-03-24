// 1337. The K Weakest Rows in a Matrix

// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). 
// The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    let result = [], sortedArray = []
    for(let [index, row] of mat.entries()) {
        let count = 0
        for(let i = 0; i < row.length; i++) {
            if(row[i] === 1) count += 1
        }
        sortedArray.push([index, count])
    }
    sortedArray.sort((a,b) => a[1] - b[1])
    for(let i = 0; i < k; i++) {
        result.push(sortedArray[i][0])
    }
    return result
};