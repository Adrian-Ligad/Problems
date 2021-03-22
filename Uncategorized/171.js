// 171. Excel Sheet Column Number
// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    const numToLetterASCII = 64
    let count = 0
    for(let i = 0; i < columnTitle.length; i++) {
        let number = columnTitle.charCodeAt(i) - numToLetterASCII
        count = count * 26 + number
    }
    return count
};