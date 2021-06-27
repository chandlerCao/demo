const fangdou = (fn, delay) => {
    let timer = null
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this, ...arguments)
        }, delay);
    }
}

const jieliu = (fn, delay) => {
    let [timer, finishi] = [null, false]
    return function () {
        if (finishi) return
        finishi = true
        timer = setTimeout(() => {
            fn.call(this, ...arguments)
            finishi = false
        }, delay);
    }
}