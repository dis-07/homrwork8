'use strict';


//////////      Task #1

function sumTwoSmallestNumbers (...array) {

    let sortArray = array.sort((a, b) => a - b);

    let x = sortArray[0];
    let y = sortArray[1];

    if (array.length <= sortArray) {
        return console.error('array is smoll');
    } else {
        return x + y;
    }

}

console.log(sumTwoSmallestNumbers(2,3,5,1,7,8));
console.log(sumTwoSmallestNumbers(2));


/////////

////////        Task #2


