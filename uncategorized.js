/* 1)   283 Move Zeroes
    Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*/

const uncategorized293 = () => {
    let curPointer = 0, slowPointer = 0;
    while(curPointer !== nums.length) {
        if(nums[curPointer] !== 0) {
            const holder = nums[slowPointer]
            nums[slowPointer] = nums[curPointer]
            nums[curPointer] = holder;
            slowPointer++
        }
        curPointer++
    }
    return nums;
}

/* 2)   412 FizzBuzz
Write a program that outputs the string representation of numbers from 1 to n.
But for multiples of three it should output “Fizz” instead of the number 
and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
*/

const uncategorized412 = () => {
    if(n < 1) return []
    let result = []
    for(let i = 1; i <= n; i++) {
        let string = ""
        if ( i % 3 === 0 ) string += "Fizz"
        if ( i % 5 === 0 ) string += "Buzz"
        string = string === "" ? i.toString() : string
        result.push(string)
    }
    return result
}

/* 3)   387. First Unique Character in a String
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
*/

const uncategorized387 = () => {
    let uniqueCharMap = new Map();
    let repeatCharMap = new Map();
    for(let i = 0; i < s.length; i++) {
        if (!uniqueCharMap.has(s[i]) && !repeatCharMap.has(s[i])) { 
            uniqueCharMap.set(s[i], i)
        } 
        else {
            uniqueCharMap.delete(s[i])
            repeatCharMap.set(s[i], i)
        }
    }
    if(uniqueCharMap.size > 0) return uniqueCharMap.values().next().value
    else return -1
}

/* 4)   326. Power of Three
Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.
*/

const uncategorized326 = () => {
    if(n === 0) return false
    let number = n
    while(number % 3 === 0 ) number = number / 3
    return number === 1 ? true : false;
}

/* 5)   344. Reverse String
Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
You may assume all the characters consist of printable ascii characters.
*/

const uncategorized344 = () => {
    for (let i = 0; i < s.length/2; i++) {
        let indexHolder = s[i]
        s[i] = s[s.length - i - 1]
        s[s.length - i - 1] = indexHolder
    }
}

/* 6)   268. Missing Number
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/

const uncategorized268 = () => {
    nums.push(true);
    for(let i = 0; i < nums.length; i++) {
        let indexNumber = nums[i];
        let holdNum;
        while(nums[indexNumber] !== true) {
            holdNum = nums[indexNumber];
            nums[indexNumber] = true;
            indexNumber = ;
        }
    }
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== true) return i;
    }
    return nums.length - 1
}

/* 7)   347. Top K Frequent Elements
Given a non-empty array of integers, return the k most frequent elements.
*/

const uncategorized347 = () => {
    let mostFrequent = [], frequentMap = {}, frequentArray = [];
    for(let num of nums) if (!++frequentMap[num]) frequentMap[num] = 0;
    for(let number in frequentMap) frequentArray.push([ number , frequentMap[number] ]);
    frequentArray.sort((a,b) => b[1] - a[1]);
    while( k-- ) mostFrequent.push(frequentArray.shift()[0]);
    return mostFrequent
}
/* 5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.
*/
const uncategorized5 = () => {
    let longestString = ""
    
    for(let i = 0; i < s.length; i++) {
        expandMiddle(i,i)
        expandMiddle(i, i + 1)
    }
    return longestString;

    function expandMiddle (left , right) { 
        while(s[right] === s[left] && s[right] !== undefined) {
            left--
            right++
        
        }
        let wordCheck = s.slice(left + 1, right)
        longestString = longestString.length > wordCheck.length ? longestString : wordCheck
    }
}