var Promise2 = function (func) {
    this.status = 'unfulfilled'
    this.promiseValue = null
    const myResolve = data => {
        this.status = 'resolved'
        this.promiseValue = data
        if (this.thenResolve) {
            this.thenResolve(data)
            delete this.thenResolve
        }
    }
    const myReject = err => {
        this.status = 'rejected'
        this.thenReject(null)
    }
    func(myResolve, myReject)
    return this
}

Promise2.prototype.then = function (resolve, reject) {
    // if already resolved, resolve immediately
    if (this.status === 'resolved') {
        this.promiseValue = resolve(this.promiseValue)
    } else {
    // else, pass the func in and wait for the internal 'resolve' call
        this.thenResolve = resolve
        this.thenReject = reject
    }
    return this
}

new Promise2((resolve, reject) => {
    setTimeout(() => resolve('this is data'), 1000)
})
.then(data => {
    console.log(data)
    return data
})
