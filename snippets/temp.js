{
    window.a = {
        b: 'c'
    }
    const key = 'a.b'
    const keyArr = key.split('.');

    let res = keyArr.reduce((prev, next) => {
        return prev[next]
    }, window)
    console.log(res)
}