/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (72.45%)
 * Likes:    627
 * Dislikes: 0
 * Total Accepted:    56.4K
 * Total Submissions: 77.8K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 *
 * 例如，给出 n = 3，生成结果为：
 *
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const list = []
  function doRecurrent (base, currentCount, posCount, negCount) {
    if (posCount === 0 && negCount === 0) {
      list.push(base)
    }
    if (currentCount >= 0 && posCount > 0) {
      doRecurrent(base + '(', currentCount + 1, posCount - 1, negCount)
    }
    if (currentCount > 0 && negCount > 0) {
      doRecurrent(base + ')', currentCount - 1, posCount, negCount - 1)
    }
  }
  doRecurrent('', 0, n, n)
  return list
}
// @lc code=end

console.log(generateParenthesis(3))
