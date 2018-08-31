function fibWithoutMem (n) {
    if (n < 2) {
        return n
    } else {
        return fibWithoutMem(n - 1) + fibWithoutMem(n - 2)
    }
}
this.mem = {}
function fibWithMem (n) {
    if (mem[n]) {
        return mem[n]
    } else {
        if (n < 2) {
            return mem[n] = n
        } else {
            return mem[n] = fibWithMem(n - 1) + fibWithMem(n - 2)
        }
    }
}
{   
    const n = 50
    const start = performance.now()
    console.log(fibWithoutMem(n))
    const end1 = performance.now()
    console.log(`timing of no mem: ${end1 - start}ms`)
    const start2 = performance.now()
    console.log(fibWithMem(n))
    console.log(`timing of with mem: ${performance.now() - start2}ms`)
}