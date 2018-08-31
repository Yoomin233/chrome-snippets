function merge(arr1, arr2) {
    const res = [];
    let i1 = i2 = 0;
    while (i1 < arr1.length && i2 < arr2.length) {
        if (arr1[i1] < arr2[i2]) {
            res.push(arr1[i1++])
        } else {
            res.push(arr2[i2++]);
        }
    }
    return res;
}