// 1684. Count the Number of Consistent Strings

// You are given a string allowed consisting of distinct characters and an array of strings words. 
// A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    let allowedObj = []
    for(let i = 0; i < allowed.length; i++) {
        const letter = allowed[i]
        allowedObj[ letter ] = true
    }
    let result = 0;
    for(let i = 0; i < words.length; i++) {
        let word = words[i]
        let isTrue = true
        for(let j = 0; j < word.length; j++) {
            if(!allowedObj[word[j]]) isTrue = false
        }
        if(isTrue) result ++
    }
    return result
};