// Greed is a dice game played with five six - sided dice.Your mission, should you choose to accept it, is to score a throw according to these rules.You will always be given an array with five six - sided dice values.
// A single die can only be counted once in each roll.For example, a "5" can only count as part of a triplet(contributing to the 500 points) or as a single 50 points, but not both in the same rol

function score(dice) {
    let countOne = 0,
        countTwo = 0,
        countThree = 0,
        countFour = 0,
        countFive = 0,
        countSix = 0,
        points = 0

    for (let i = 0; i < 6; i++) {
        if (dice[i] == 1) {
            countOne++
        }
        else if (dice[i] == 2) {
            countTwo++
        }
        else if (dice[i] == 3) {
            countThree++
        }
        else if (dice[i] == 4) {
            countFour++
        }
        else if (dice[i] == 5) {
            countFive++
        }
        else if (dice[i] == 6) {
            countSix++
        }
    }
    countOne == 3 ? points += 1000 : null;
    countSix >= 3 ? points += 600 : null;
    countFive == 3 ? points += 500 : null;
    countFour >= 3 ? points += 400 : null;
    countThree >= 3 ? points += 300 : null;
    countTwo >= 3 ? points += 200 : null;

    countOne < 3 ? points += countOne * 100 : null;
    countOne > 3 ? points = 1000 + (countOne - 3) * 100 : null;
    countFive < 3 ? points += countFive * 50 : null;
    countFive > 3 ? points = 500 + (countFive - 3) * 50 : null;


    return points;
}