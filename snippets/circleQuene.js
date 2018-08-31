// from 算法的乐趣 p5 - 环形队列
const CircleQuene = function() {
    this.quene = []
    this.tailPointer = -1
    //     this.headPointer = 0
    this.maxRecords = 10000
    this.add = function(msg) {
        this.tailPointer = (this.tailPointer + 1) % this.maxRecords
        this.quene[this.tailPointer] = msg
//         console.log(this.quene, this.tailPointer)

    }
    this.readTail = function(num) {
        if (this.quene.length < this.maxRecords) {
            return this.quene
        } else {
            return this.quene.slice(this.tailPointer, this.tailPointer + 1)
        }
    }
}
const circleQuene1 = new CircleQuene()

const ArrQuene = function() {
    this.quene = []
    this.maxRecords = 10000
    this.add = function(msg) {
        if (this.quene.length >= this.maxRecords) {
            this.quene.shift()
        }
        this.quene.push(msg)
    }
}

const arrQuene = new ArrQuene()

console.time('circle')
for (let i = 0; i < 88888; i++) {
    circleQuene1.add(i)
}
console.timeEnd('circle')
console.log(circleQuene1)
console.time('arr')
for (let i = 0; i < 88888; i++) {
    arrQuene.add(i)
}
console.timeEnd('arr')
console.log(arrQuene)
