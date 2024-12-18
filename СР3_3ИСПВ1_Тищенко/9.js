function convertToObj(arr) {
    return arr.reduce((acc, obj) => {
        acc[obj.key] = obj.value;
        return acc;
    }, {});
}

console.log(convertToObj([{ key: 'a', value: 1 }, { key: 'b', value: 2 }]));
