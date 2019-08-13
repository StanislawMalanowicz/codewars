// Build Tower
// Build Tower by the following given argument:
// number of floors(integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a[String];
// Ruby: returns an Array;
// Have fun!

// solution:

function towerBuilder(nFloors) {
    let str = '*';
    let arr = [];
    let nr = nFloors;
    let space = '';
    for (let i = 0; i < nr - 1; i++) {
        space += ' '
    }
    for (let i = 0; i < nr; i++) {
        arr.push(space + str + space)
        str += '**'
        space = space.replace(' ', '')
    }
    return arr
}