// 100th Kata
// You are given a message(text) that you choose to read in a mirror(weirdo).Return what you would see, complete with the mirror frame.Example:

// 'Hello World'

// would give:


// Words in your solution should be left - aligned.

function mirror(text) {
    var res = text.split(' ').map(el => el.split('').reverse().join(''));

    var arrSec = []
    res.forEach(el => arrSec.push(el.length))
    arrSec.sort(function (a, b) { return b - a })
    var maxLength = arrSec[0];
    for (let i = 0; i < res.length; i++) {
        if (res[i].length < maxLength) {
            var difference = maxLength - res[i].length;
            for (let y = 0; y < difference; y++) {
                res[i] += ' '
            }
        }
    }
    var star = ''
    var arr = []
    for (let i = 0; i < maxLength + 4; i++) {
        star += '*';
    }
    arr.push(star + '\n')
    res.forEach(el => arr.push('* ' + el.split('').join('') + ' *'))
    for (let i = 1; i < arr.length; i++) {
        arr[i] += '\n'
    }
    arr.push(star)

    return String(arr).split('').filter(el => el != ',').join('')
    // return res

}