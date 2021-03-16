/*680. Valid Palindrome II
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
*/
/**
 * @param {string} s
 * @param {number} p1
 * @param {number} p2
 * @return {boolean}
 */
 const isTruePalindrome = function(s, p1, p2) {
    while (p1 < p2) {
      if (s[p1] !== s[p2]) return false;
      p1++;
      p2--;
    }  
    return true;
  }
  
  /**
   * @param {string} s
   * @return {boolean}
   */
  const validPalindrome = function(s) {
    let p1 = 0;
    let p2 = s.length - 1; 
    while (p1 < p2) {
      if (s[p1] !== s[p2]) return isTruePalindrome(s, p1 + 1, p2) || isTruePalindrome(s, p1, p2 - 1);
      p1++;
      p2--;
    }
    return true;
  }