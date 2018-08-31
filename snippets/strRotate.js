// https://github.com/julycoding/The-Art-Of-Programming-By-July/blob/master/ebook/zh/01.01.md
// 旋转字符串
function LeftShiftOne(arr) {
    const len = arr.length;
    const first = arr[0];
    for (let i = 1; i < len; i++) {
        arr[i - 1] = arr[i];
    }
    arr[len - 1] = first;
    return arr;
}
function leftRotateStr(arr, m) {
    while (m--) {
        LeftShiftOne(arr)
    }
    return arr
}

function reverseString(arr, from, to) {
//     let from = 0, to = arr.length - 1;
    while (from < to) {
        [arr[from - 1], arr[to + 1]] = [arr[to--], arr[from++]]
    }
    return arr;
}
function leftRotateStr2 (arr, m) {
    m %= arr.length
    reverseString(arr, 0, m - 1);
    reverseString(arr, m, arr.length - 1);
    reverseString(arr, 0, arr.length - 1)
    return arr;
}