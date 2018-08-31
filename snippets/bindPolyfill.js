Function.prototype.bind2 = function (thisArg) {
    let thisFunc = this;
    return function () {
        return thisFunc.apply(thisArg, arguments)
    }
}