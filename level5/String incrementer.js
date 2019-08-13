// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number.the number 1 should be appended to the new string.
//     Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(word) {
    var numbersArr = [];
    var lettersArr = [];
    var tab = word.split('')
    tab.forEach(el => Number(el) || Number(el) == 0 ? numbersArr.push(el) : lettersArr.push(el)
    )
    var arrToStr = numbersArr.join('')
    var numArrLength = arrToStr.length;
    var strToNum = +arrToStr
    var noZeroNumLength = String(strToNum).length
    // console.log('numArr: ', numbersArr)

    var zeroNum = numArrLength - noZeroNumLength;
    // console.log('zeruNum pre: ', zeroNum)
    if (zeroNum > 0 && numbersArr[numbersArr.length - 1] == 9) {
        zeroNum--;
    }
    // console.log('zero post: ', zeroNum)
    for (let i = 0; i < zeroNum; i++) {
        lettersArr.push('0')
    }

    lettersArr.push(strToNum + 1)
    // 	console.log('lettersArr: ', lettersArr)
    return lettersArr.join("");
}