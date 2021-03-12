/* 412 FizzBuzz
Write a program that outputs the string representation of numbers from 1 to n.
But for multiples of three it should output “Fizz” instead of the number 
and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
*/
/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
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
};