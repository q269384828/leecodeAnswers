/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (35.97%)
 * Likes:    333
 * Dislikes: 0
 * Total Accepted:    42.5K
 * Total Submissions: 117.7K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 
 * 注意：
 * 
 * 答案中不可以包含重复的四元组。
 * 
 * 示例：
 * 
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let ret = [];
    if (nums.length < 4) {
        return ret;
    }
    let i = 0;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > (i + 1) && nums[j] === nums[j - 1]) {
                continue;
            }
            const sum = target - nums[i] - nums[j];
            let k = j + 1;
            let m = nums.length - 1;
            while (k < m) {
                if (nums[k] + nums[m] === sum) {
                    ret.push([nums[i], nums[j], nums[k], nums[m]])
                }
                if (nums[k] + nums[m] >= sum) {
                    while (k < m && nums[m] == nums[--m]);
                } else {
                    while (k < m && nums[k] == nums[++k]);

                }

            }
        }
    }
    return ret;

};
// @lc code=end