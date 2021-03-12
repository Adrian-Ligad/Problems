/*392. Is Subsequence
Given two strings s and t, check if s is a subsequence of t.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without 
disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let sPointer = 0
    let tPointer = 0
    while(tPointer < t.length) {
        if(s[sPointer] === t[tPointer]) sPointer++
        tPointer++
    }
    return sPointer === s.length ? true : false; 
};