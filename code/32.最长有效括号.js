/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (28.68%)
 * Likes:    408
 * Dislikes: 0
 * Total Accepted:    29.7K
 * Total Submissions: 103K
 * Testcase Example:  '"(()"'
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 *
 * 示例 1:
 *
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 *
 *
 * 示例 2:
 *
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // 方法一: 使用 栈
  // let stack = [-1];
  // let max = 0;
  // for (let i = 0; i < s.length; i++) {
  //     const code = s.charAt(i);
  //     if (code === '(') {
  //         stack.push(i)
  //     } else {
  //         stack.pop();
  //         if (!stack.length) {
  //             stack.push(i);// 保证最后一个 非匹配的字符的下标在栈顶
  //         } else {
  //             max = Math.max(max, i - stack[stack.length - 1]);
  //         }
  //     }
  // }
  // return max;
  // 方法二:动态规划
  let max = 0
  const len = s.length
  const dp = new Array(len).fill(0)
  let preIndex = 0
  for (let index = 1; index < len; index++) {
    const char = s.charAt(index)
    if (char === ')') {
      if (s.charAt(index - 1) === '(') {
        // 情形1: .....()
        if (index >= 2) {
          dp[index] = dp[index - 2] + 2
        } else {
          dp[index] = 2
        }
      } else if (s.charAt(preIndex = index - 1 - dp[index - 1]) === '(') {
        // 情形2: .........))
        if (preIndex - 1 >= 0) {
          dp[index] = dp[index - 1] + dp[preIndex - 1] + 2
        } else {
          dp[index] = dp[index - 1] + 2
        }
      }
    }
    max = Math.max(max, dp[index])
  }
  return max
}
// @lc code=end
