/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const len = s.length

  const map = {}
  for (let index = 0; index < len; index++) {
    if (!map[s.charAt(index)]) {
      if (Object.values(map).includes(t.charAt(index))) {
        return false
      }
      map[s.charAt(index)] = t.charAt(index)
    } else {
      if (map[s.charAt(index)] !== t.charAt(index)) {
        return false
      }
    }
  }
  return true
}
// @lc code=end
