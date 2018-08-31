var subSet = function(set) {
    const res = []
    for (let i = 1, l = set.length; i <= l; i++) {
        for (let j = 0; j <= l - 1; j++) {
            if (i === 1) {
                res.push([set[j]])
            }
        }
    }
    return res
}
subSet([1,2,3,4])