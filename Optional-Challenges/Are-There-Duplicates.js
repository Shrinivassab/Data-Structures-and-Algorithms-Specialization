function areThereDuplicates(...char) {
    // good luck. (supply any arguments you deem necessary.)
    // return (new Set(arr)).size !== arr.length;
    let obj = {};
    for(let val of char){
        obj[val] = (obj[val] || 0) + 1
    }
    for(let key in obj){
        if(obj[key] > 1){
            return true;
        }
    }
    return false;
}


areThereDuplicates([1,2,3]);
// areThereDuplicates([1,2,2]);
// areThereDuplicates(['a', 'b', 'c', 'a']);