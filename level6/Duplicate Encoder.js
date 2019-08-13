// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.Ignore capitalization when determining if a character is a duplicate.

// solution: 

const duplicateEncode = word => {
    let arr = word.toLowerCase().split('');
    let arrLength = arr.length
    let newArr = [];
    arr.forEach(el => {
        let duplArr = []
        for (let i = 0; i < arrLength; i++) {
            arr[i] == el ? duplArr.push('x') : null;
        }
        duplArr.length > 1 ? newArr.push(')') : newArr.push('(')

    })
    return newArr.join('')
}