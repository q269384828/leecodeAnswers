/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n <= 2) {
    return 0
  }

  let count = 1

  for (let i = 3; i < n; i++) {
    if (isPrimes(i)) {
      count++
    }
  }
  return count
}

function isPrimes (num) {
  let isPrime = true
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      isPrime = false
      return isPrime
    }
  }
  return isPrime
}
// @lc code=end
