// 804. Unique Morse Code Words

// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: 
// "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.",
// "...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. 
// For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-...").
//  We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    const morseAlphabet = [".-","-...","-.-.","-..",".","..-.",
                           "--.","....","..",".---","-.-",".-..",
                           "--","-.","---",".--.","--.-",".-.",
                           "...","-","..-","...-",".--","-..-",
                           "-.--","--.."]
    const morseSet = new Set()
    for(let word of words) {
        let morseTranslation = ""
        for (let i = 0; i < word.length; i++) {
            let morseCharacter = morseAlphabet[word.charCodeAt(i) - 97]
            morseTranslation += morseCharacter
        }
        morseSet.add(morseTranslation)
    }
    return morseSet.size
};