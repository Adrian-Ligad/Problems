// 1021. Remove Outermost Parentheses

// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, 
// where A and B are valid parentheses strings, and + represents string concatenation.  
// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to 
// split it into S = A+B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, 
// where P_i are primitive valid parentheses strings.

// Return S after removing the outermost parentheses of every primitive string in the 
// primitive decomposition of S.

/**
 * @param {string} S
 * @return {string}
 */
 var removeOuterParentheses = function(S) {
    let string = "", stack = []
    for(let paranthesis of S) {
        if(stack.length === 0) {
            stack.push(paranthesis)
        } else {
            if( paranthesis === ")" && stack[stack.length - 1] === "(" ) stack.pop()
            else stack.push(paranthesis)
            if(stack.length !== 0) string += paranthesis
        }
    }
    return string
};