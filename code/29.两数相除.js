/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) return 2147483647

  if (divisor === 1) return dividend

  if (divisor === -1) return 0 - dividend

  if (dividend === 0) return 0

  let isN = true
  if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
    isN = false
  }

  if (dividend < 0) {
    dividend = 0 - dividend
  }
  if (divisor < 0) {
    divisor = 0 - divisor
  }

  let result = 0
  while (dividend >= divisor) {
    let base = divisor
    let dig = 1
    while (base <= (dividend >> 1)) {
      dig = dig << 1
      base = base << 1
    }
    result += dig
    dividend -= base
  }
  if (isN) {
    return 0 - result
  }
  return result
}

// @lc code=end

/**
 * 难点:
 *  1. 除法实现思路
 *  2. 边界问题
 */
