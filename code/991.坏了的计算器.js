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
  let target = Y
  while (target > X) {
    target /= 2
  }
  while (target !== X) {
    if (X > target) {
      if ((X - 1) >= target) {
        X--
        count++
      } else {
        target *= 2
      }
    } else {
      X *= 2
      count++
    }
  }
  while (target < Y) {
    target *= 2
    count++
  }
  return count
}
// @lc code=end

console.log(brokenCalc(5, 8))
// 1 -> 2 -> 4 -> 8 -> ....->1024...->4096->8192->16384->
