// Bob is preparing to pass IQ test.The most frequent task in this test is to find out which one of the given numbers differs from the others.Bob observed that one number usually differs from the others in evenness.Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// !Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1(not 0)

function iqTest(numbers) {
    let nrArr = numbers.split(" ").map(el => Number(el)),
        oddNrs = nrArr.filter(el => el % 2 != 0),
        evenNrs = nrArr.filter(el => el % 2 == 0);
    // console.log(nrArr)
    if (oddNrs.length == 1) {
        var oddPosition = nrArr.indexOf(Number(oddNrs)) + 1;
        return oddPosition;
    }
    else if (evenNrs.length == 1) {
        var oddPosition = nrArr.indexOf(Number(evenNrs)) + 1;
        return oddPosition;
    }
}
