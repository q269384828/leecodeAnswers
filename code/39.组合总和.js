/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 *
 * https://leetcode-cn.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (67.32%)
 * Likes:    458
 * Dislikes: 0
 * Total Accepted:    48.5K
 * Total Submissions: 71.9K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 *
 * candidates 中的数字可以无限制重复被选取。
 *
 * 说明：
 *
 *
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。
 *
 *
 * 示例 1:
 *
 * 输入: candidates = [2,3,6,7], target = 7,
 * 所求解集为:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 *
 *
 * 示例 2:
 *
 * 输入: candidates = [2,3,5], target = 8,
 * 所求解集为:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 *
 */

// @lc code=start

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const list = []
  candidates.sort((a, b) => a - b)
  // 回溯法
  function recurrent (base, start, count) {
    // 剪枝: 去掉重复的结果
    for (let index = start; index < candidates.length; index++) {
      const element = candidates[index]
      const nextCount = count - element
      const next = Array.from(base)
      next.push(element)
      if (nextCount === 0) {
        list.push(next)
      } else if (nextCount >= element) {
        recurrent(next, index, nextCount)
      }
    }
  }

  recurrent([], 0, target)
  return list
}
// @lc code=end
