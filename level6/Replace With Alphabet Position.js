// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.


function alphabetPosition(text) {
    let code = [];
    let num = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`<|>^\d+$?@'~()]/g, "")
        .replace(/ +/g, "").split("")
    num.forEach(function (el) {
        if (el.charCodeAt() - 96 > 0) {
            code.push(el.charCodeAt() - 96)
        }
    })
    return code.join(" ")
}