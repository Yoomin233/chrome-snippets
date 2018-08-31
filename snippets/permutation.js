// https://github.com/julycoding/The-Art-Of-Programming-By-July/blob/master/ebook/zh/01.06.md
// 字符串/数组全排列
function callAllPermutation (arr, fromIndex) {
    if (fromIndex === arr.length) {
        return console.log('res' + arr)
    }
    for (let i = fromIndex; i < arr.length; i++) {
        [arr[i], arr[fromIndex]] = [arr[fromIndex], arr[i]];
        callAllPermutation(arr, fromIndex + 1);
        console.log(arr, i, fromIndex);
        [arr[fromIndex], arr[i]] = [arr[i], arr[fromIndex]];
    }
}