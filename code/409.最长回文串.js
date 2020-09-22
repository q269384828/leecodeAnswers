/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = {}
  for (let index = 0; index < s.length; index++) {
    const element = s[index]
    if (!map[element]) {
      map[element] = 0
    }
    map[element] += 1
  }
  let hasSignal = false
  const pairCount = Object.values(map).reduce(function (preVal, currentVal) {
    if (!hasSignal) {
      hasSignal = currentVal % 2
    }
    return preVal + Math.floor(currentVal / 2)
  }, 0)
  return pairCount * 2 + Number(hasSignal)
}
// @lc code=end
console.log(longestPalindrome('abccccdd'))
