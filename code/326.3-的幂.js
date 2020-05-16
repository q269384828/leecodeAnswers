/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 0) {
    return false
  }
  while (n !== 1) {
    if (n % 3 !== 0) {
      return false
    }
    n = n / 3
  }
  return true
}
// @lc code=end
