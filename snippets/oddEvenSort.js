// https://github.com/julycoding/The-Art-Of-Programming-By-July/blob/master/ebook/zh/02.06.md
// 奇偶调序
{
    function oddEvenSort(arr) {
        let sortedIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                [arr[sortedIndex], arr[i]] = [arr[i], arr[sortedIndex]]
                sortedIndex++
            }
        }
        return arr
    }
    console.log(oddEvenSort([4, 1, 2, 3, 4, 7, 10, 5, 8]))
}