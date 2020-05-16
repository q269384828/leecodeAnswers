/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  return helper(1, n)
}
function helper (left, right) {
  const mid = ((left + right) / 2) | 0
  const result = guess(mid)
  if (result === 0) {
    return mid
  }

  if (result === -1) {
    return helper(left, mid - 1)
  }

  if (result === 1) {
    return helper(mid + 1, right)
  }
}
// @lc code=end
