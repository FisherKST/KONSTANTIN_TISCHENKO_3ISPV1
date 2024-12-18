function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

console.log(findIntersection([1, 2, 3], [2, 3, 4]));
