/* 387. First Unique Character in a String
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
*/
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let uniqueCharMap = new Map();
    let repeatCharMap = new Map();
    for(let i = 0; i < s.length; i++) {
        if (!uniqueCharMap.has(s[i]) && !repeatCharMap.has(s[i])) { 
            uniqueCharMap.set(s[i], i)
        } 
        else {
            uniqueCharMap.delete(s[i])
            repeatCharMap.set(s[i], i)
        }
    }
    if(uniqueCharMap.size > 0) return uniqueCharMap.values().next().value
    else return -1
};