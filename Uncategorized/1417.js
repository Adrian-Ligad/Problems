// 1417. Reformat The String

// Given alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

// You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. 
// That is, no two adjacent characters have the same type.

// Return the reformatted string or return an empty string if it is impossible to reformat the string.

/**
 * @param {string} s
 * @return {string}
 */
 var reformat = function(s) {
    let newString = "", lettersArr = [], numbersArr = []
    for(let character of s) {
        if( character.toLowerCase() !== character.toUpperCase() ) lettersArr.push(character)
        else numbersArr.push(character)
    }
    if( Math.abs(lettersArr.length - numbersArr.length) > 1) return newString
    let max = lettersArr.length > numbersArr.length ? lettersArr : numbersArr
    let min = lettersArr.length <= numbersArr.length ? lettersArr : numbersArr
    while(max.length !== 0) {
        let letter = max.shift()
        if( min.length !== 0 ) letter += min.shift()
        newString += letter
    }
    return newString
};