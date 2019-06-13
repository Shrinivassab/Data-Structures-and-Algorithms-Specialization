function maxSubarraySum(arr, num){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length< num) {
        return null;
    }
    let sum = 0;
    for(let i = 0; i < num; i++) {
        sum += arr[i];
    }
    let tempSum = sum;
    for(let i = num; i < arr.length; i++) {
        tempSum += arr[i] - arr[i - num];
        if(tempSum > sum) {
            sum = tempSum;
        }
    }
    return sum;
}

// maxSubarraySum([100,200,300,400], 2);
// maxSubarraySum([2,3], 3);
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4);
maxSubarraySum([-3,4,0,-2,6,-1], 2);
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2);