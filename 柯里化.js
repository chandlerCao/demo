const add = a => {
    return b => {
        return b ? c => {
            if (c) return add(a + b)(c)
            return a + b
        } : a
    }
}

console.log(add(1)(2)(3)(4)(15)())
