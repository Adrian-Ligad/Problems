/* 1)   283 Move Zeroes
    Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*/

const uncategorized293 = (nums) => {
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

const uncategorized412 = (n) => {
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

const uncategorized387 = (s) => {
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

const uncategorized326 = (n) => {
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

const uncategorized344 = (s) => {
    for (let i = 0; i < s.length/2; i++) {
        let indexHolder = s[i]
        s[i] = s[s.length - i - 1]
        s[s.length - i - 1] = indexHolder
    }
}

/* 6)   268. Missing Number
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/

const uncategorized268 = (nums) => {
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

const uncategorized347 = (nums) => {
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
const uncategorized5 = (s) => {
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

/* 121. Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

const uncategorized121 = (prices) => {
    let minPrice, maxProf
    for(let i = 0; i < prices.length; i++) {
        if(minPrice === undefined || prices[i] < minPrice) minPrice = prices[i];
        else maxProf = prices[i] - minPrice > maxProf || !maxProf ? prices[i] - minPrice : maxProf;
    }
    return !maxProf ? 0 : maxProf;
}

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/
const uncategorized20 = (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "]" || s[i] === "}" || s[i] === ")") {
            let complement;
            switch (s[i]) {
                case "]" :
                    complement = "["
                    break;
                case "}" :
                    complement = "{"
                    break;
                case ")" :
                    complement = "("
                    break;
            }
            if (stack[stack.length - 1] === complement) {
                stack.pop()
                continue;
            } 
        }
        stack.push(s[i])
    }
    return stack.length === 0 ? true : false;
}
/*1768. Merge Strings Alternately
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.
*/
var uncategorized1768 = (word1, word2) => {
    let merged = ""
    let shortest = Math.min(word1.length, word2.length)
    for(let i = 0; i < shortest; i++) {
        merged += word1[i] + word2[i]
    }
    let rest = word1.length > word2.length ? word1.slice(shortest) : word2.slice(shortest)
    return merged + rest
};

/*794. Valid Tic-Tac-Toe State
A Tic-Tac-Toe board is given as a string array board. Return True if and only if it is possible to reach this board 
position during the course of a valid tic-tac-toe game.

The board is a 3 x 3 array, and consists of characters " ", "X", and "O".  The " " character represents an empty square.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" ").
The first player always places "X" characters, while the second player always places "O" characters.
"X" and "O" characters are always placed into empty squares, never filled ones.
The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
*/

var uncategorized794 = (board) => {
    let result = checkNum()
    let [ xCount, oCount ] = result
    return checkWins(xCount, oCount)
    
    function checkWins(xCount, oCount) {
        if (oCount > xCount || xCount > oCount + 1) return false
        const isCheckRow = checkRow()
        const isCheckColumn = checkColumn()
        const isCheckDiag = checkDiag()
        if(!isCheckRow || !isCheckColumn) return false
        if(isCheckRow[0] === "X" || isCheckColumn[0] === "X" ) {
            if(xCount === oCount) return false
        }
        if(isCheckDiag === "O") {
            if(xCount !== oCount) return false
        }
        if(isCheckDiag === "X") {
            if(xCount <= oCount) return false
        }
        return true
    }
    
    function checkRow() {
        let xStreakAmount = 0, oStreakAmount = 0
        for(let i = 0; i < 3; i++) {
            let xStreak = 0, oStreak = 0 
            for(let j = 0; j < 3; j++) {
                if(board[i][j] === "X") xStreak++
                if(board[i][j] === "O") oStreak++
            }
            if(xStreak === 3) xStreakAmount++
            if(oStreak === 3) oStreakAmount++
        }
        if(xStreakAmount && oStreakAmount) return false
        return xStreakAmount > 0 ? ["X", xStreakAmount] : oStreakAmount > 0 ? ["O", oStreakAmount]   : true      
    }
    function checkColumn() {
        let xStreakAmount = 0, oStreakAmount = 0
        for(let i = 0; i < 3; i++) {
            let xStreak = 0, oStreak = 0 
            for(let j = 0; j < 3; j++) {
                if(board[j][i] === "X") xStreak++
                if(board[j][i] === "O") oStreak++
            }
            if(xStreak === 3) xStreakAmount++
            if(oStreak === 3) oStreakAmount++
        }
        if(xStreakAmount && oStreakAmount) return false
        return xStreakAmount > 0 ? ["X", xStreakAmount] : oStreakAmount > 0 ? ["O", oStreakAmount]   : true      
    }
    
    function checkDiag() {
        let xStreak = 0, oStreak = 0, i = 0, j = 0
        while(i < 3) {
            if(board[i][j] === "X") xStreak++
            if(board[i][j] === "O") oStreak++
            i++
            j++
        }
        if(xStreak === 3) return "X"
        if(oStreak === 3) return "O"
        xStreak = 0, oStreak = 0, i = 0, j = 2
        while(i < 3) {
            if(board[i][j] === "X") xStreak++
            if(board[i][j] === "O") oStreak++  
            i++
            j--
        }
        if(xStreak === 3) return "X"
        if(oStreak === 3) return "O"
    }
    
    function checkNum(xCounter = 0, oCounter = 0) {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if (board[i][j] === "X") xCounter++
                if(board[i][j] === "O") oCounter++
            }
        }
        return [xCounter, oCounter]
    }
};

/*1518. Water Bottles
Given numBottles full water bottles, you can exchange numExchange empty water bottles for one full water bottle.
The operation of drinking a full water bottle turns it into an empty bottle.
Return the maximum number of water bottles you can drink
*/

var uncategorized1518 = (numBottles, numExchange) => {
    let numBottlesLeft = numBottles, remainder = 0, numBottlesDrank = 0
    while(numBottlesLeft > 0) {
        let curRemainder = (numBottlesLeft+ remainder) % numExchange
        numBottlesDrank += numBottlesLeft
        numBottlesLeft = Math.floor((numBottlesLeft + remainder)/numExchange)
        remainder = curRemainder
        
    }
    return numBottlesDrank
};

/*392. Is Subsequence
Given two strings s and t, check if s is a subsequence of t.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without 
disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

var uncategorized392 = (s, t) => {
    let sPointer = 0
    let tPointer = 0
    while(tPointer < t.length) {
        if(s[sPointer] === t[tPointer]) sPointer++
        tPointer++
    }
    return sPointer === s.length ? true : false; 
};