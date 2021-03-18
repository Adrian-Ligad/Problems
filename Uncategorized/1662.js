// 1662. Check If Two String Arrays are Equivalent
// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

 /**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let word1String = word2String = ""
    word1.forEach(word => word1String += word)
    word2.forEach(word => word2String += word)
    if(word1String.length !== word2String.length) return false
    for(let i = 0;i < word1String.length; i++) {
        if(word1String[i] !== word2String[i]) return false
    }
    return true
};