// Imagine two rings with numbers on them.The inner ring spins clockwise(decreasing by 1 each spin) and the outer ring spins counter clockwise(increasing by 1 each spin).We start with both rings aligned on 0 at the top, and on each move we spin each ring one increment.How many moves will it take before both rings show the same number at the top again ?

//     The inner ring has integers from 0 to innerMax and the outer ring has integers from 0 to outerMax, where innerMax and outerMax are integers >= 1.

// solution: 

function spinningRings(innerMax, outerMax) {
    let count = 1;
    let dec = innerMax;
    let inc = 1;
    while (dec != inc) {
        if (dec != 0) {
            dec--;
        } else {
            dec = innerMax;
        } if (inc != outerMax) {
            inc++
        } else {
            inc = 0
        }
        count++
    }

    return count;
};