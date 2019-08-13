// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

//     Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of ProjectEuler.net

function solution(number) {
    if (number != 0 && typeof number == 'number') {
        let arr = [];
        if (number >= 0) {
            for (let i = 0; i < number; i++) {
                if (i % 3 == 0 || i % 5 == 0) {
                    arr.push(i);
                }
            }

        }
        for (let i = 0; i > number; i--) {
            if (i % 3 == 0 || i % 5 == 0) {
                arr.push(i);
            }
        }
        let sol = arr.reduce((a, c) => a + c)

        return sol;
    }
    let sum = 0;
    return sum;
}
