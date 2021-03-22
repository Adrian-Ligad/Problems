// 1047. Remove All Adjacent Duplicates In String
// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.
/**
 * @param {string} S
 * @return {string}
 */
 var removeDuplicates = function(S) {
    for(let i = 1; i < S.length; i += 1) {
        if(S[i - 1] === S[i]) {
            S = S.slice(0, i-1) + S.slice(i + 1)
            i -= 2
        }
    }
        return S
};

