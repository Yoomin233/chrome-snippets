function Modal(elem, initVal) {
    let val
    if (initVal) {
        val = initVal
        elem.value = initVal
    } else {
        val = elem.value
    }
    elem.addEventListener('change', (e)=>val = e.target.value)
    return new class {
        get val() {
            return val
        }
        set val(newVal) {
            val = newVal
            elem.value = newVal
        }
    }
}
var c = new Modal(document.querySelector('input'),'3')
