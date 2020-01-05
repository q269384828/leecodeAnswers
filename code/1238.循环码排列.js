/*
 * @lc app=leetcode.cn id=1238 lang=javascript
 *
 * [1238] 循环码排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function (n, start) {
  var arr = []
  let a = 1
  let count = 0
  while (!arr.length || arr[0] !== start) {
    arr.push(start)
    if (count % n === 0) {
      a = 1
    }
    start = start ^ a
    a = a << 1
    count++
  }
  return arr
}
// @lc code=end

// 方法错误: 需要用到 格雷码的知识

console.log(circularPermutation(3, 2))
