
// 1 2 3 3 3  0
// 冒泡排序
const arr = [1, 3, 3, 2, 3, 0, 1, 2, 3, 4, 3, 12, 23, 3, 0]
for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
}
console.log(arr)

// 1,1, 2, 3,3  2

// 插入排序
const newArr = [arr[0]]
for (let i = 1; i < arr.length; i++) {
    const item = arr[i]
    for (let j = newArr.length - 1; j >= 0; j--) {
        if (newArr[j] < item) {
            newArr.splice(j + 1, 0, item)
            break
        }
        if (j === 0) newArr.unshift(item)
    }
}
console.log(newArr)


