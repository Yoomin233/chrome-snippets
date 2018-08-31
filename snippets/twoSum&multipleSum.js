// https://github.com/julycoding/The-Art-Of-Programming-By-July/blob/master/ebook/zh/02.02.md
// 寻找和为定值的两个数
{
    const inputArr = [1, 2, 4, 7, 11, 15]
      , targetNum = 15;
    // 暴力穷举法
    function exhaustionMethod(arr, targetNum) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let k = i; k < arr.length; k++) {
                if (arr[i] + arr[k] === targetNum) {
                    console.log(i, k);
                    return;
                }
            }
        }
    }

    function binarySearch(arr, target, from=0, to=arr.length-1) {
        //         const arrCopy = arr.slice();
        //         while (from <= to) {
        const index = Math.floor((from + to) / 2);
        const median = arr[index];
        if (median === target) {
            return index;
        } else if (median < target) {
            return binarySearch(arr, target, index + 1, to);
        } else {
            return binarySearch(arr, target, from, index - 1);
        }
        //         }
        return -1
    }
    
    // 两端扫描法(输入数组已经经过排序)
    function twoSum(arr, target) {
        let start = 0, end = arr.length - 1;
        while (start < end) {
            const currentSum = arr[start] + arr[end]
            if (currentSum === target) {
                console.log(start, end);
                break;
            }  else {
                if (currentSum < target) {
                    start++
                } else {
                    end--
                }
            }
        }
    }
    //     exhaustionMethod(inputArr, targetNum);
//     console.log(binarySearch([1, 2, 3, 6, 8, 9, 10, 12, 15], 3))
//     twoSum([1, 2, 4, 7, 10, 14, 18], 16)
}
{
    // https://github.com/julycoding/The-Art-Of-Programming-By-July/blob/master/ebook/zh/02.03.md
    // 寻找和为定值的多个数
    
}
