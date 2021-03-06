/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0
  let count = 32
  while (count--) {
    // 这里不能用 移位运算符
    result *= 2
    result += n & 1
    n = n >> 1
  }
  return result
}
