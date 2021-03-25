// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let sObject = {}
    for(let letter of s) {
        if(!sObject[letter]) sObject[letter] = 0
        sObject[letter] += 1
    }
    for(let letter of t) {
        if(!sObject[letter]) return false
        sObject[letter] -= 1
        if(sObject[letter] === 0) delete sObject[letter]
    }
    if(Object.keys(sObject).length > 0) return false
    return true
};