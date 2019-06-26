function reorder(arr, index) {
    // Fix all elements one by one
    for (let i=0; i<arr.length; i++) {
        // While index[i] and arr[i] are not fixed
        while (index[i] != i)
        {
            // Store values of the target (or correct)
            // position before placing arr[i] there
            let oldTargetI = index[index[i]];
            let oldTargetE = arr[index[i]];

            // Place arr[i] at its target (or correct)
            // position. Also copy corrected index for
            // new position
            arr[index[i]] = arr[i];
            index[index[i]] = index[i];

            // Copy old target values to arr[i] and
            // index[i]
            index[i] = oldTargetI;
            arr[i]   = oldTargetE;
        }
    }
    return arr;
}

reorder([50, 40, 70, 60, 90], [3,  0,  4,  1,  2]);
// OutPut: 40, 60 90 50 70;
