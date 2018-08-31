{
    const arr = Array(30).fill().map((_, index) => index + 1)
    for (let i = arr.length - 1; i >= 0; i--) {
        let rand = Math.floor((i + 1) * Math.random())
        console.log(rand)
        [arr[rand], arr[i]] = [arr[i], arr[rand]]
    }
    console.log(arr)
}