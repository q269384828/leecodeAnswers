/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  const strList = str.split(' ')
  if (pattern.length !== strList.length) {
    return false
  }
  const map = {}
  for (let idx = 0; idx < strList.length; idx++) {
    const element = strList[idx]
    const symbol = map[element]
    const expSym = pattern[idx]

    if (!symbol) {
      if (pattern.indexOf(expSym) < idx) {
        return false
      }
      map[element] = expSym
    } else if (symbol !== expSym) {
      return false
    }
  }
  return true
}
// @lc code=end
