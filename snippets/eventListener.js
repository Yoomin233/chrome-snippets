function Listener(evtName) {
    if (!evtName)
        throw new Error('Must specify a event name!');
    this.evtName = evtName;
}
Listener.prototype.addEventListener = function(callback) {
    if (!this.callBacks)
        this.callBacks = [];
    typeof callback === "function" && this.callBacks.push(callback);
}
Listener.prototype.trigger = function() {
    if (!this.callBacks || (this.callBacks && !this.callBacks.length))
        return;
    for (let i = 0; i < this.callBacks.length; i++) {
        //         console.log(i);
        const func = this.callBacks[i];
        if (typeof func === 'function') {
            func.apply(this, arguments)
        }
    }
}
Listener.prototype.removeEventListner = function(evtName, func) {
    if (!this.callBacks || (this.callBacks && !this.callBacks.length))
        return;
    let funcIndex = this.callBacks.indexOf(func)
    if (funcIndex !== -1)
        this.callBacks.splice(funcIndex, 1);
}
Listener.prototype.removeAllListeners = function() {
    this.callBacks = [];
}
