// 22. Generate Parentheses
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let result = []
    recursion()
    return result
    
    function recursion(lParCount = n, rParCount = n, string = "") {
        if(!lParCount && !rParCount) result.push(string)
        if(lParCount) recursion(lParCount - 1, rParCount, string + "(")
        if(lParCount < rParCount) recursion(lParCount, rParCount - 1, string + ")")
    }
};