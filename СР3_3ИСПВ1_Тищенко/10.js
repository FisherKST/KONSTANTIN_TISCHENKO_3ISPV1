function sumMultiples(arr) {
    return arr.filter(num => num % 3 === 0 || num % 5 === 0).reduce((acc, num) => acc + num, 0);
}

console.log(sumMultiples([1, 2, 3, 4, 5, 6, 10])); 

