function mergeAndSort(arr1, arr2) {
    const merged = arr1.concat(arr2);
    return [...new Set(merged)].sort((a, b) => a - b);
}

console.log(mergeAndSort([3, 1, 4], [4, 5, 1]));