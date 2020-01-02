/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * 组合 Cm(n)
 * @param {*} m
 * @param {*} n
 */
function combine (m, n) {
  if ((m - n) < n) {
    n = m - n
  }
  let big = 1
  let small = 1
  while (n) {
    big *= m--
    small *= n
    n--
  }
  return big / small
}
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  //   let count = 0
  //   function walk (i, j) {
  //     if (i === m || j === n) {
  //       count++
  //       return
  //     }
  //     if (i < m) {
  //       walk(i + 1, j)
  //     }
  //     if (j < n) {
  //       walk(i, j + 1)
  //     }
  //   }
  //   walk(1, 1)
  //   return count
  return combine(m + n - 2, m - 1)
}
// @lc code=end
// console.log(uniquePaths(51, 9))

/**
 * 这其实是相当与 (n-1)个x 和 n 个  y 的组合
 */
