// 709. To Lower Case

// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

/**
 * @param {string} str
 * @return {string}
 */
 var toLowerCase = function(str) {
    let lowerCasedString = ""
    for(let i = 0; i < str.length; i++) {
        let letterASCII = str.charCodeAt(i)
        if(letterASCII > 64 && letterASCII< 91) letterASCII += 32
        lowerCasedString += (String.fromCharCode(letterASCII))
    }
    return lowerCasedString
};