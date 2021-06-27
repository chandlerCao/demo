const arr = [12, 23, 46, 57, 23, 500, 12, 57, 500, 90, 204, 23, 76]

// set方法
// console.log(Array.from(new Set(arr)))

// 正则
// arr.sort()
// const arrStr = arr.join('@') + '@'

// const reg = /(\w+@)\1*/g

// arrStr.replace(reg, (m, n) => {
//     return false
// })

// 用剩余数组去除当前项目
// const len = arr.length
// for (let i = 0; i < len; i++) {
//     const item = arr[i]
//     const subArr = arr.slice(i + 1, arr.length)
//     if (subArr.includes(item)) {
//         arr.splice(i, 1)
//         i--
//     }
// }

// 用对象的唯一key值做判断
// const resArr = Object.keys(arr.reduce((obj, item) => {
//     obj[item] = true
//     return obj
// }, {}))
// console.log(resArr.map(item => Number(item)))