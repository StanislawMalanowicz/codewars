// Create an addition function that does not utilize the + or - operators.

//     Anti - cheat tests
// You may not use any of these symbols: +-[].'"`

// Moreover, Math, Array, eval, new Function, with and such have been disabled.


// solution: 

const add = function (a, b) {
    if (b == 0) {
        return a;
    } else {
        return add(a ^ b, (a & b) << 1)
    }
};