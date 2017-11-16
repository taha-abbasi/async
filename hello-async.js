// setTimeout(function () {
//     console.log('1');
// }, 2000);
//
// setTimeout(function () {
//     console.log('3');
// }, 1000);
//
// console.log('2');

console.log('Challenge');

function printInTwoSeconds (message) {
    // setTimeout 2000
    //      console to print message var

    setTimeout(function () {
        console.log(message);
    }, 2000);
}

printInTwoSeconds('Hello async!');