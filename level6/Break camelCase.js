// Complete the solution so that the function will break up camel casing, using a space between words.

// solution: 

function solution(string) {
    let regex = /[A-Z]/g;
    let arr = string.split('');
    let newArr = []
    arr.forEach(el => {
        if (regex.test(el)) {
            newArr.push(' ' + el)
        } else {
            newArr.push(el)
        }
    });
    return newArr.join('')
}