function countFrequency(arr) {
    const frequency = {};
    arr.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
    });
    return frequency;
}

console.log(countFrequency(['a', 'b', 'a', 'c', 'a', 'b']));
