/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
function small (num, n) {
  return num % n ? num : num / n
}
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  let temp = 0
  while (temp !== num) {
    if (temp !== 0) {
      num = temp
    }
    temp = small(num, 2)
    temp = small(temp, 3)
    temp = small(temp, 5)
  }
  if (num === 1) {
    return true
  }
  return false
}
// @lc code=end
