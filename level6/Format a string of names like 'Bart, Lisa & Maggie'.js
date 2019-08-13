// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
    console.log(names.length)
    if (names.length == 0) {
        return ''
    } else if (names.length == 1) {
        return names[0].name
    } else if (names.length == 2) {
        return `${names[0].name} & ${names[1].name}`
    } else if (names.length > 2) {

        var dupa = [];
        var num = names.length - 1
        for (var i = 0; i < num; i++) {
            dupa.push(names[i].name)
        }
        return dupa.join(', ') + ' & ' + names[num].name
    }
}
