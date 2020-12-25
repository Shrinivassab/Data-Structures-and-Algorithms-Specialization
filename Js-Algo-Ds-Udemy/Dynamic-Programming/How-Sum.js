const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) {
        return memo[targetSum];
    }

    if (targetSum === 0) {
        return [];
    }

    if (targetSum < 0) {
        return null;
    }

    for (let num of numbers) {
        let reminder = targetSum - num;
        let reminderResult = howSum(reminder, numbers, memo);
        if (reminderResult !== null) {
            memo[targetSum] = [...reminderResult, num];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null
    return null;

}

console.log(howSum(7, [5,3,4,7]));
// console.log(howSum(7, [2,3]));
// console.log(howSum(7, [2,4,7]));
console.log(howSum(300, [7, 14]));
