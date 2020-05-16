/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  // A = 65
  let title = ''
  while (n) {
    let hig = (n / 26) | 0
    let d = (n % 26) | 0
    if (d === 0) {
      d = 26
      hig -= 1
    }
    title = String.fromCharCode(64 + d) + title
    n = hig
  }
  return title
}
// @lc code=end
