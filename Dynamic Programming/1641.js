// 1641. Count Sorted Vowel Strings

// Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

// A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

/**
 * @param {number} n
 * @return {number}
 */
 var countVowelStrings = function(n) {
    let result = 0
    backTrack(n, 0)
    return result
    
    function backTrack(numLeft, indexStart) {
        if(numLeft === 0) {
            result++
            return
        }
        for( let i = indexStart; i < 5; i++ ) {
            let numLef
            backTrack(numLeft - 1, i)
        }
    }
};