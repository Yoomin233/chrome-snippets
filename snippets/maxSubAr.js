{
    // https://github.com/julycoding/The-Art-Of-Programming-By-July/blob/master/ebook/zh/02.04.md
    // 连续最大子数组和
    function maxSubArr(arr) {
        let maxVal = 0
          , currentVal = 0
          , maxPos = []
          , currentPos = []
        for (let i = 0; i < arr.length; i++) {
            //             maxVal = arr[i] > maxVal ? arr[i] : maxVal
            for (let j = i; j < arr.length; j++) {
                for (let k = i; k <= j; k++) {
                    currentVal += arr[k];
                    currentPos.push(k);
                }
                if (currentVal > maxVal) {
                    maxVal = currentVal;
                    maxPos = currentPos;
                }
                currentVal = 0;
                currentPos = [];
            }
        }
        return [maxVal, maxPos]
    }

    // 事实上，当我们令currSum为当前最大子数组的和，maxSum为最后要返回的最大子数组的和，当我们往后扫描时，

    // 对第j+1个元素有两种选择：要么放入前面找到的子数组，要么做为新子数组的第一个元素；
    // 如果currSum加上当前元素a[j]后不小于a[j]，则令currSum加上a[j]，否则currSum重新赋值，置为下一个元素，即currSum = a[j]。
    // 同时，当currSum > maxSum，则更新maxSum = currSum，否则保持原值，不更新。
    function maxSubArr2(arr) {
        let currentVal = 0
          , maxSum = 0
          , maxPos = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > currentVal + arr[i]) {
                currentVal = arr[i];
                maxPos = [i];
            } else {
                currentVal += arr[i];

            }
            if (currentVal > maxSum) {
                maxPos.push(i);
                maxSum = currentVal;
            }
        }
        return [maxSum, maxPos];
    }
    console.log(maxSubArr2([1, -2, 3, 10, -4, 7, 2, -5]))
}
