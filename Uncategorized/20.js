/* 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
/*

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
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
  };

  /**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let complementObj = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    let stack = []
    for(let symbol of s) {
        switch(symbol) {
            case "]" :
            case ")" :
            case "}" :
                if(complementObj[symbol] === stack[stack.length - 1]) {
                    stack.pop();
                    break;
                }
                return false
            default :
                stack.push(symbol)
        }
    }
    return stack.length === 0 ? true : false
};