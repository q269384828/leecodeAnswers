/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  const MAX = 4294967296
  const dict = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

  if (num < 0) {
    num = MAX + num
  }
  let ret = ''
  do {
    const li = num % 16
    ret = dict[li] + ret
    num = (num - li) / 16
  } while (num)
  return ret
}
// @lc code=end
