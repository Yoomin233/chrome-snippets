class SuperNum extends Number {
    constructor (num) {
        return super(num)
    }
    add (num) {
        return new this.constructor(Number(this) + num)
    }
}