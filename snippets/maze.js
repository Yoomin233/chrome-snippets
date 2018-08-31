var _1minSum = 0
var _1minArr = [-0.01, 0.28, 0.02, -0.07, 0.2, 0.08, 0.17, -0.16, -0.2, 0.1, -0.05, 0.03, 0, 0.01, 0, 0, 0.35, 0, 0.09, 0.04]
for (let i = _1minArr.length - 1 ; i >= 0; i--) {
    const current = _1minArr[i]
    if (current > 0) {
        _1minSum += current
    } else {
        break;
    }
}
