const fbnq = times => {
    const arr = [1, 1]

    for (let i = 0; i < times - 1; i++) {
        arr.push(arr[i] + arr[i + 1])
    }

    return arr
}

console.log(fbnq(50))
