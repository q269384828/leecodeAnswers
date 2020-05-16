/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    const charCode = s[i]
    if (map[charCode] == null) {
      map[charCode] = i
    } else {
      map[charCode] = -1
    }
  }
  const list = Object.values(map).filter(i => i !== -1)
  if (list.length) {
    return Math.min(...list)
  }
  return -1
}
// @lc code=end
