// 49. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging 
// the letters of a different word or phrase, typically using all the original letters exactly once.

 /**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = []
    let strsObj = strs.map((string, index) => {
        let sorted = string.split("").sort().join("")
        return {
            sorted,
            index
        }
    }).sort((a, b) => a.sorted > b.sorted ? 1 : -1)
    for(let i = 0; i < strsObj.length; i++) {
        let string1 = strsObj[i]
        if(result.length === 0) result.push([strs[string1.index]])
        else {
            string2 = strsObj[i - 1]
            let max = Math.max(string1.sorted.length, string2.sorted.length)
            let isTrue = true
            for(let i = 0; i < max; i++) {
                if( string1.sorted[i] !== string2.sorted[i] )isTrue = false
            }
            if(isTrue) result[result.length - 1].push(strs[string1.index])
            else result.push([strs[string1.index]])
        }
    }
    return result
};