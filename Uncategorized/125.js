/*125. Valid Palindrome
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let leftIndex = 0, rightIndex = s.length - 1
    const letterNumber = /^[a-zA-Z0-9]/
    while(leftIndex < rightIndex) {
        while( s[leftIndex] && !s[leftIndex].match(letterNumber) ) leftIndex += 1
        while( s[rightIndex] && !s[rightIndex].match(letterNumber) ) rightIndex -= 1
        if(leftIndex > s.length || rightIndex < 0) return true
        if( s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase() ) return false
        leftIndex++
        rightIndex--
    }
    return true
};