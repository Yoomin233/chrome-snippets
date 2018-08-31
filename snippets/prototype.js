let cal
{
    const BaseCal = function() {
        this.decimal = 2
    }
    BaseCal.prototype.add = function(x, y) {
        return x + y
    }
    const Cal = function() {
        this.tax = 2
    }
    Cal.prototype = new BaseCal()
    Cal.prototype.hello = 'hell!'
    Cal.prototype.constructor = Cal
    cal = new Cal()
//     console.log(cal)
}
