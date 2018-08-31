const testArr = Array.from({length: 100000}).map(_ => Math.floor(Math.random() * 100000))
function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr.slice(pivotIndex, pivotIndex + 1)[0]
//     const left = arr.filter(item => item < pivot)
//     const right = arr.filter(item => item > pivot)
    return quickSort(arr.filter(item => item < pivot)).concat([pivot], quickSort(arr.filter(item => item > pivot)))
}
console.time('quickSort')
console.log(quickSort(testArr))
console.timeEnd('quickSort')
console.time('jsSort')
console.log(testArr.sort((a, b) => a - b))
console.timeEnd('jsSort')