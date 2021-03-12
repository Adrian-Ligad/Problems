/* 5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.
*/

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let longestString = ""
    
    for(let i = 0; i < s.length; i++) {
        expandMiddle(i,i)
        expandMiddle(i, i + 1)
    }
    return longestString;

    function expandMiddle (left , right) { 
        while(s[right] === s[left] && s[right] !== undefined) {
            left--
            right++
        
        }
        let wordCheck = s.slice(left + 1, right)
        longestString = longestString.length > wordCheck.length ? longestString : wordCheck
    }

};