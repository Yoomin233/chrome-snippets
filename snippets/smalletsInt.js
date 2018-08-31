// https://github.com/julycoding/The-Art-Of-Programming-By-July/blob/master/ebook/zh/02.01.md
// 输出n个整数中最小的k个
{
    function quickSort(arr) {
        if (arr.length <= 1)
            return arr
        const [pivot] = arr.splice(Math.floor(arr.length) / 2, 1)
        const left = []
          , right = [];
        for (let i = 0; i < arr.length; i++) {
            //                     console.log('exec!')
            if (arr[i] < pivot) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return quickSort(left).concat(pivot, quickSort(right));
    }
    function getSmallestK(arr, k) {
        arrCopy = arr.slice();
        let smallStack = quickSort(arrCopy.splice(0, k));
        //         return smallStack;
        for (let i = 0; i < arrCopy.length; i++) {
            if (arrCopy[i] < smallStack[smallStack.length - 1]) {
                smallStack[smallStack.length - 1] = arrCopy[i];
                smallStack = quickSort(smallStack)
            }
        }
        return smallStack
    }
    console.log(getSmallestK([0, 5, 4, 3, 1, 10], 3))
}
