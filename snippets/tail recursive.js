function recur(n) {
    if (n === 1) {
        return n
    } else {
        return n + recur(n - 1)
    }
}
function tailRecur(n, result) {
    if (n === 1) {
        return result
    } else {
        return tailRecur(n - 1, result + n)
    }
}
