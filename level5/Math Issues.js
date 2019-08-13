// Oh no, our Math object was "accidently" reset.Can you re - implement some of those functions ? We can assure, that only non - negative numbers are passed as arguments.So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()


Math.round = function (number = 0) {
    var arr = String(number).split('');
    var index = arr.indexOf('.');
    var after = Number((arr.slice(index + 1))[0])


    if (String(number).indexOf('.') == -1) {
        return number
    } else if (after >= 5) {
        return parseInt(number) + 1
    } else {
        return parseInt(number)
    }
};

Math.ceil = function (number = 0) {
    if (String(number).indexOf('.') == -1) {
        return number
    } else {
        return parseInt(number) + 1
    }

};

Math.floor = function (number = 0) {

    return parseInt(number)
};