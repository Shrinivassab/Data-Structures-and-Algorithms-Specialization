function averagePair(arr, avg){
    // add whatever parameters you deem necessary - good luck!
    // Increment left if the avg is less, decrement right If the avg is greater
    let left = 0, right = arr.length-1;
    while(left < arr.length) {
        if((arr[left]+arr[right])/2 < avg) {
            left++;
        } else if((arr[left]+arr[right])/2 > avg) {
            right--;
        } else {
            return true;
        }
    }
    return false;
}

// averagePair([1,2,3], 2.5);
// averagePair([1,3,3,5,6,7,10,12,19], 8);
averagePair([-1,0,3,4,5,6], 4.1);