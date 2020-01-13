/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const ret = [1]
  const indexArr = Array(primes.length).fill(0)
  while (ret.length < n) {
    let min = 0
    for (let i = 0; i < primes.length; i++) {
      const prime = primes[i]
      const index = indexArr[i]
      const value = prime * ret[index]
      if (i === 0) {
        min = value
      } else {
        min = Math.min(min, value)
      }
    }
    ret.push(min)
    for (let i = 0; i < primes.length; i++) {
      if (min % primes[i] === 0) {
        indexArr[i]++
      }
    }
  }
  return ret.pop()
}
// @lc code=end
