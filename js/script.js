'use strict';


//////////      Task #1

// function sumTwoSmallestNumbers (...array) {

//     let sortArray = array.sort((a, b) => a - b);

//     let x = sortArray[0];
//     let y = sortArray[1];

//     if (array.length <= sortArray) {
//         return console.error('array is smoll');
//     } else {
//         return x + y;
//     }

// }

// console.log(sumTwoSmallestNumbers(2,3,5,1,7,8));
// console.log(sumTwoSmallestNumbers(2));


/////////

////////        Task #2


function makeCalc (calc) {
    return {
        sum: function(sum) {
            return calc = calc + sum;
        },
        mult: function(mult) {
            return calc = calc * mult;
        },
        sub: function(sub) {
            return calc = calc - sub;
        },
        div: function(div) {
            return calc = calc / div;
        },
    }
}

const calculete = makeCalc(10);

console.log(calculete.sum(5));
console.log(calculete.mult(10));
console.log(calculete.sub(40)); 
console.log(calculete.div(10)); 