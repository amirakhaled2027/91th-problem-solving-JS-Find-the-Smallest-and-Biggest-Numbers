//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);
    let compareNum = [minNum, maxNum];

    return compareNum;
}
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));