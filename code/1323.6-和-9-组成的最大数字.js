/*
 * @lc app=leetcode.cn id=1323 lang=javascript
 *
 * [1323] 6 和 9 组成的最大数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  const strArr = num.toString().split('')
  for (let i = 0; i < strArr.length; i++) {
    const char = strArr[i]
    if (char === '6') {
      strArr[i] = '9'
      break
    }
  }
  return strArr.join('') | 0
}
// @lc code=end
