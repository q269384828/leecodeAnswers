/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  const m = num1.length
  const n = num2.length
  // 初始化位数
  const mp = new Array(m + n - 1).fill(0)
  let i = 0
  // 模拟 竖式计算
  for (; i < m; i++) {
    for (let j = 0; j < n; j++) {
      mp[i + j] += num1[m - i - 1] * num2[n - j - 1]
    }
  }
  i = 0
  // 处理进位
  while (i < mp.length - 1) {
    mp[i + 1] += Math.floor(mp[i] / 10)
    mp[i] = mp[i] % 10
    i++
  }
  // 反序输出
  return mp.reverse().join('')
}
// @lc code=end
