// 

const digital_root = nr => {
    let sum = 0;
    let i = 0;
    let num = nr.toString();
    if (num.length == 1) {
        return nr
    }

    for (i = 0; i < num.length; i++) {
        sum += Number(num[i])
    }
    return digital_root(sum)
}