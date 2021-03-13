// 438. Find All Anagrams in a String
// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
// The order of output does not matter.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//sliding window
var findAnagrams = function(s, p) {
    let startIndices = []
    let pMap = new Map(), sMap = new Map()
    let left = 0, right = 0
    
    for(let letter of p) {
        if(!pMap.has(letter)) pMap.set(letter, 0)
        pMap.set(letter, pMap.get(letter) + 1)
    }
    
    while(right !== s.length) {
        let currentLetter = s[right]
        if(pMap.has(currentLetter)) {
            if(!sMap.has(currentLetter)) sMap.set(currentLetter, 0)
            sMap.set(currentLetter, sMap.get(currentLetter) + 1)
            while(pMap.get(currentLetter) < sMap.get(currentLetter) && left < right) {
                let leftLetter = s[left]
                sMap.set(leftLetter, sMap.get(leftLetter) - 1)
                left++
            }
            let isAnagram = true
            for(let key of pMap.keys()) {
                let sLetterCurCount = sMap.has(key) ? sMap.get(key) : 0
                let pLetterCurCount = pMap.get(key)
                if(sLetterCurCount !== pLetterCurCount) isAnagram = false
            }
            
            if(isAnagram === true) {
                startIndices.push(right - (p.length - 1))
            }
        }
        else {
            sMap = new Map()
            left = right
        }
        right++
    }
    return startIndices
};