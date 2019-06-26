function flattenArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? flattenArray(flat): flat;
}

flattenArray([2, [2,[3]], [4], [1], [3,[5],[6,[60]]]]);
