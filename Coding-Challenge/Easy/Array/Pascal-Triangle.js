// function pascalTriangle(n) {
//     var result = [[1], [1, 1]];
//     var previous = [1, 1];
//     var data = [1];
//     var numberOfrows = 2;
//     var sum = 0;

//     if (n === 0) {
//         return [];
//     }
//     if (n === 1) {
//         return data;
//     }
//     if (n === 2) {
//         return result;
//     }

//     while (numberOfrows < n) {
//         for (let i = 0; i < previous.length - 1; i++) {
//             sum = previous[i] + previous[i + 1];
//             data.push(sum);
//         }
//         data.push(1);
//         previous = data;
//         result.push(data);
//         data = [1];
//         numberOfrows++
//     }
//     return result;
// }

var getRow = function(rowIndex) {
    var result = [[1], [1, 1]];
    var previous = [1, 1];
    var data = [1];
    var numberOfrows = 2;
    var sum = 0;
    if (rowIndex === 0) {
        return [];
    }
    if (rowIndex === 1) {
        return [[1]];
    }
    while (numberOfrows <= rowIndex) {
        for (let i = 0; i < previous.length - 1; i++) {
            sum = previous[i] + previous[i + 1];
            data.push(sum);
        }
        data.push(1);
        previous = data;
        result.push(data);
        data = [1];
        numberOfrows++
    }
    return result[rowIndex];
};

// pascalTriangle(5);
getRow(3);