const once = fn => {
    let b = false
    return function () {
        if (b) return
        b = true
        fn.call(this, ...arguments)
    }
}

const fn = (a, b) => {
    console.log(a + b)
}

const newFn = once(fn)

newFn(1, 2)
newFn(1, 3)