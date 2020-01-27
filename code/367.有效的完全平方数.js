/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 2
  let right = num
  if (num < 2) {
    return true
  }
  while (left <= right) {
    const mid = parseInt((left + right) / 2)
    console.log(`left:${left},right:${right},mid:${mid}`)

    const guess = mid * mid

    if (guess === num) {
      return true
    }
    if (guess > num) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}
// @lc code=end
