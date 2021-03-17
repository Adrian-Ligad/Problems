// 3. Longest Substring Without Repeating Characters


// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let max = 0, letterObj = {}, start = 0, end = 0
    while(end < s.length) {
        let letter = s[end]
        if(!letterObj[letter]) {
            letterObj[letter] = true
        } else {
            while(s[start] !== letter) delete letterObj[s[start++]]
            start++
        }
        let added = end - start + 1
        if(added > max) max = added
        end++
    }
    return max
};