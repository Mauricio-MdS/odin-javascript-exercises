const sumAll = function(a, b) {

    if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number") {
        return "ERROR";
    }

    let sum = 0;
    let min = a < b ? a : b;
    let max = a > b ? a : b;

    for (i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
