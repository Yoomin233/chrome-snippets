{
    const arr = [5, 10, 2, 5, 3, 1, 8, 10, 4];
    const bubbleSort = (arr)=>{
        function swap(arr, i, j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        const arrCopy = arr.slice();
        for (let i = arrCopy.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (arrCopy[j] > arrCopy[j + 1]) {
                    swap(arrCopy, j, j + 1);
                }
            }
        }
        return arrCopy;
    }
    //     bubbleSort(arr);
    const selectionSort = (arr)=>{
        function swap(arr, i, j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        const arrCopy = arr.slice();
        for (let i = 0; i < arrCopy.length - 1; i++) {
            let index = i;
            for (let j = i + 1; j <= arrCopy.length - 1; j++) {
                if (arrCopy[index] > arrCopy[j]) {
                    index = j;
                }
            }
            swap(arrCopy, i, index);
        }
        return arrCopy;
    }
    selectionSort(arr);
}
