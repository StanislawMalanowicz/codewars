// The first input array contains the correct answers to an exam, like["a", "a", "b", "d"].The second one is "answers" array and contains student's answers.

// The two arrays are not empty and are the same length.Return the score for this array of answers, giving + 4 for each correct answer, -1 for each incorrect answer, and + 0 for each blank answer(empty string).

// If the score < 0, return 0.




// solution: 
function checkExam(array1, array2) {
    let length = array1.length;
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (array1[i] == array2[i]) {
            count += 4;
        } else if (array1[i] != array2[i] && array2[i] != "") {
            count -= 1;
        }
    }
    if (count <= 0) {
        return 0;
    }
    return count;
}