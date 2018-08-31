class pandora {
    static new(name) {
        return new this(name)
    }
    constructor(name) {
        this.name = name
    }
    process (name) {
        this.name = name
        return this
    }
    scale(num) {
        this.scale = num
        return this
    }
}