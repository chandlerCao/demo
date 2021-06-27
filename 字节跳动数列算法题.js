// 15  [[1, 2, 3, 4, 5], [4, 5, 6], [7, 8]]

const creatrArr = count => {
    const middleCount = Math.ceil(count / 2)
    const arr = []
    fn()
    return arr
    function fn(start = 1) {
        if (start === count - 1) return arr
        let subCount = 0
        const subArr = []
        for (let i = start; i <= middleCount; i++) {
            subCount += i
            subArr.push(i)
            if (subCount >= count) {
                if (subCount === count) arr.push(subArr)
                fn(start + 1)
                break
            }
        }
    }
}

console.log(creatrArr(6))