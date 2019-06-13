function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    let length1 = num1.toString().length;
    let length2 = num2.toString().length;
    if(length1 !== length2) {
        return false;
    }

    let frequency1 = {};
    for(let i = 0; i < length1; i++) {
        let number = num1.toString()[i];
        frequency1[number] ? frequency1[number] +=1 : frequency1[number] = 1;
    }
    for(let i = 0; i < length2; i++) {
        let number = num2.toString()[i];
        if(!frequency1[number]) {
            return false;
        } else {
            frequency1[number] -=1;
        }
    }
    return true;
}

// sameFrequency(236,632);
// sameFrequency(34,14);
// sameFrequency(231236,6312342);
sameFrequency(22,222);