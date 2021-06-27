const myNew = (fn, ...arg) => {
    const proto = Object.create(fn.prototype)
    return fn.call(proto, ...arg)
}