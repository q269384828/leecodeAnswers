/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (55.37%)
 * Likes:    184
 * Dislikes: 0
 * Total Accepted:    30K
 * Total Submissions: 53.7K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 */

// @lc code=start

function swap(nums, a, b) {
    if (a === b) {
        return;
    }
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b)
    let list = []
    let hasPicked = new Array(nums.length).fill(false)

    function backtrack(picks) {
        if (picks.length === nums.length) {
            list.push(picks)
            return;
        }

        for (let index = 0; index < nums.length; index++) {
            const element = nums[index];
            if (!hasPicked[index]) {
                if (index > 0 && element === nums[index - 1] && hasPicked[index - 1]) {
                    continue;
                }
                hasPicked[index] = true;
                backtrack([...picks, element])
                hasPicked[index] = false;
            }


        }
    }
    backtrack([]);
    return list;
};

// @lc code=end
