{
    let arr = [4, 2, 1, 5];
    function bubbleSort(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            for (let k = i - 1; k >= 0; k--) {
                if (arr[k + 1] < arr[k]) {
                    [arr[k],arr[k + 1]] = [arr[k + 1], arr[k]]
                }
            }
        }
        return arr;
    }
    function whatSort(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            for (let k = i - 1; k >= 0; k--) {
                if (arr[i] < arr[k]) {
                    [arr[k],arr[i]] = [arr[i], arr[k]]
                }
            }
        }
        return arr;
    }
    function selectionSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            let smallestIndex = i;
            for (let k = i + 1; k < arr.length; k++) {
                if (arr[k] < arr[smallestIndex]) {
                    smallestIndex = k;
                }
            }
            if (i !== smallestIndex) {
                [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
            }
        }
        return arr;
    }
    function quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const [pivot] = arr.splice(Math.floor(arr.length / 2), 1);
        const left = [], right = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return quickSort(left).concat(pivot, quickSort(right))
    }
    function binarySearch(arr, target, start = 0, end = arr.length - 1) {
        const n = Math.floor((start + end) / 2)
        if (arr[n] === target) {
            return n
        } else if (arr[n] > target) {
            return binarySearch(arr, target, start, n - 1)
        } else {
            return binarySearch(arr, target, n + 1, end)
        }
        return -1;
    }
    console.log(binarySearch([1,2,3,4,6], 6));
}
