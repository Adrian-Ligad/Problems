// 1209. Remove All Adjacent Duplicates in String II
// Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters 
// from s and removing them causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.

// It is guaranteed that the answer is unique.

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var removeDuplicates = function(s, k) {
    let count = 0, i = 0
    while (i < s.length) {
        count = s[i] === s[i - 1] ? count + 1 : 1
        if(count === k) {
            s = s.slice(0, i - (k - 1)) + s.slice(i + 1)
            count = 1
            i -= k
            while(s[i - 1] && s[i - 1] === s[i]) i -= 1
        }
        i += 1
    }
    return s
};