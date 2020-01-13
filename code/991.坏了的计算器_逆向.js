/*
 * @lc app=leetcode.cn id=991 lang=javascript
 *
 * [991] 坏了的计算器
 */

// @lc code=start
/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function (X, Y) {
  let count = 0
  while (Y !== X) {
    if (Y < X) {
      Y += 1
    } else {
      if (Y % 2) {
        Y += 1
      } else {
        Y /= 2
      }
    }

    count++
  }
  return count
}
// @lc code=end

console.log(brokenCalc(1, 1000000000))
// 1 -> 2 -> 4 -> 8 -> ....->1024...->4096->8192->16384->
