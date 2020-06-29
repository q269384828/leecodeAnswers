/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  let str = S.replace(/-/g, '').toUpperCase()
  const headLenth = str.length % K
  if (headLenth === str.length) {
    return str
  }
  let ret = str.slice(0, headLenth)
  str = str.slice(headLenth)
  for (let index = 0; index < str.length; index += K) {
    if (ret) {
      ret += '-'
    }
    ret += str.substr(index, K)
  }
  return ret
}
// @lc code=end
