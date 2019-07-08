function hash(key, arrLength) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < arrLength.length; i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrLength;
    }
    return total;
}