const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, [12, 35, 734]],
    [[1, 2, 3], [1, 2, 3, [1, 2, 3, [4, 5, 6]]], [1, 12, [14, [434]]]],
]

const jw = arr => arr.reduce((prev, item) => {
    prev = prev.concat(Array.isArray(item) ? jw(item) : [item])
    return prev
}, [])

console.log(jw(arr))