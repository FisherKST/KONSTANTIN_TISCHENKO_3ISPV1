function reverseNumbers(arr) {
    return arr.map(num => parseInt(num.toString().split('').reverse().join('')));
}

console.log(reverseNumbers([123, 456, 789]));
