/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const map = {}
  let count = 0
  emails.forEach(email => {
    let [name, host] = email.split('@')
    name = name.replace(/\./g, '')
    const ignoreIdx = name.indexOf('+')
    if (~ignoreIdx) {
      name = name.substr(0, ignoreIdx)
    }

    if (!map[name + '@' + host]) {
      map[name + '@' + host] = true
      count++
    }
  })
  console.log(map)
  return count
}
// @lc code=end
