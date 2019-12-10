/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 *
 * https://leetcode-cn.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (58.04%)
 * Likes:    171
 * Dislikes: 0
 * Total Accepted:    30.7K
 * Total Submissions: 52.4K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 
 * 说明：
 * 
 * 
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 所求解集为:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 所求解集为:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let list = [];
    candidates.sort((a, b) => a - b)

    // 回溯法
    function recurrent(base, start, count) {
        let before = - 1;
        // 剪枝: 去掉重复的结果
        for (let index = start; index < candidates.length; index++) {

            const element = candidates[index];
            // 剪枝: [1,2,2,2,5] 中减去多个 1,2,2 
            if (before > -1 && element === before) {
                continue;
            }
            const nextCount = count - element;
            const next = Array.from(base);
            next.push(element);
            if (nextCount === 0) {
                list.push(next);
            } else if (nextCount >= element) {
                // 每个只能用一次,所以要从index+1 开始
                recurrent(next, index + 1, nextCount)
            }
            before = element;
        }
    }

    recurrent([], 0, target);

    return list;
};
// @lc code=end