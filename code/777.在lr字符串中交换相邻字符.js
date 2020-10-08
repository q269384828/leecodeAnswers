/*
 * @lc app=leetcode.cn id=777 lang=javascript
 *
 * [777] 在LR字符串中交换相邻字符
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  // 1. 不变性： 去掉X 之后 前后一致
  // 2. 可到达性：使用双指针法
  let i = 0
  let j = 0
  while (i < start.length && j < end.length) {
    while (start[i] === 'X') {
      i++
    }
    while (end[j] === 'X') {
      j++
    }
    if (
      start[i] !== end[j] ||
            (start[i] === 'L' && i < j) ||
            (start[i] === 'R' && i > j)
    ) {
      return false
    }
    i++; j++
  }
  while (i < start.length) {
    if (start[i] !== 'X') {
      return false
    }
    i++
  }
  while (j < end.length) {
    if (end[j] !== 'X') {
      return false
    }
    j++
  }

  return true
}
// var canTransform = function (start, end) {
//   // 1. 不变性： 去掉X 之后 前后一致
//   if (start.replace(/X/g, '') !== end.replace(/X/g, '')) {
//     return false
//   }
//   let t = 0
//   // 2. 可到达性： 第n个 L 变换之后在原来位置的左边
//   for (let index = 0; index < start.length; index++) {
//     const element = start[index]
//     if (element === 'L') {
//       while (end[t] !== 'L') {
//         t += 1
//       }
//       if (t > index) {
//         t += 1
//         return false
//       }
//     }
//   }

//   t = 0
//   for (let index = 0; index < start.length; index++) {
//     const element = start[index]
//     if (element === 'R') {
//       while (end[t] !== 'R') {
//         t += 1
//       }
//       if (t < index) {
//         t += 1
//         return false
//       }
//     }
//   }
//   return true
// }
// @lc code=end

var input = ['RXR', 'XXR']
var r = canTransform(...input)
console.log(input[0].replace('X', ''))
console.log(input[1].replace('X', ''))
console.log(r)
