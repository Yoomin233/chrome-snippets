{
    const arr = Array(3000).fill(null).map( _ => Math.random())
    const bubbleSort = function(arr) {
        if (arr.length <= 1) {
            return arr
        } else {
            for (let i = 0; i < arr.length; i++) {
                let current = arr[i]
                let next = arr[i+1]
                if (current > next) {
                    arr[i] = next
                    arr[i+1] = current
                }
            }
            return bubbleSort(arr.slice(0, arr.length - 1)).concat(arr[arr.length - 1])
        }

    }
    const start1 = performance.now()
    console.log(bubbleSort(arr))
    console.log(`bubble time: ${performance.now() - start1}ms`)
    const start2 = performance.now()
    console.log(arr.sort((a, b) => a - b))
    console.log(`array.sort time: ${performance.now() - start2}ms`)
}