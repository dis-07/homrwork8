'use strict';


//////////      Task #1

function sumTwoSmallestNumbers (...array) {

    if (array.length <= 1) {
        return console.error('array is smoll');
    }

    let sortArray = array.sort((a, b) => a - b);

    let x = sortArray[0];
    let y = sortArray[1];

    return x + y;

    // if (array.length <= sortArray) {
    //     return console.error('array is smoll');
    // } else {
    //     return x + y;
    // }

}

console.log(sumTwoSmallestNumbers(2,3,5,1,7,8));
console.log(sumTwoSmallestNumbers(2));


/////////

////////        Task #2


function makeCalc () {
    let defaultValue = 0;
    return {
        sum: function(sum) {
            return defaultValue = defaultValue + sum;
        },
        mult: function(mult) {
            return defaultValue = defaultValue * mult;
        },
        sub: function(sub) {
            return defaultValue = defaultValue - sub;
        },
        div: function(div) {
            return defaultValue = defaultValue / div;
        },
    }
}

const calculete = makeCalc(10);

console.log(calculete.sum(5));
console.log(calculete.mult(10));
console.log(calculete.sub(40)); 
console.log(calculete.div(10)); 