// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parens) {
    let length = parens.length
    for (let i = 0; i < length; i++) {
        parens = parens.replace('()', '')
    }
    return parens == ''
}