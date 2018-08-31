const arr = [1,1,2,3,4,5,6,7,8,9,9,10, 12, 12, 15, 15]
const removedArr = Array.from({length: Math.max.apply(Math, arr)})
arr.forEach(item => {
    removedArr[item] = 1
})
arr.reduce((prev, next) => next === prev[prev.length - 1] ? prev : prev.concat(next), [])