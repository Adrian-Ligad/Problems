// 1221. Split a String in Balanced Strings

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.

/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let matches = 0;
	let balance = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "R") balance -= 1;
		else if (s[i] === "L") balance += 1;
		if (balance === 0) matches += 1;
	}
	return matches;
};