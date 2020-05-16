/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  if (num <= 0) {
    return false
  }
  if (num === 1) {
    return true
  }
  const str = num.toString(4)
  const hei = str[0]
  if (hei !== '1') {
    return false
  }
  const others = str.slice(1)
  if (!others) {
    return true
  }
  return others.split('').every(e => e === '0')
}
// @lc code=end
