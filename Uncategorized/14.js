/*14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".    
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length < 1) return ""
    let commonPre = "", curIndex = 0
    while( true ) {
        let letter = strs[0][curIndex]
        for(let string of strs) {
            if(string[curIndex] !== letter) letter = false
        }
        if(letter) commonPre += letter
        else break;
        curIndex += 1
        
    }
    return commonPre
};