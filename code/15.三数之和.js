/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (24.44%)
 * Likes:    1550
 * Dislikes: 0
 * Total Accepted:    121.2K
 * Total Submissions: 494.9K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length
  const ret = []
  nums.sort((a, b) => a - b)
  let i = 0
  while (i < len - 2) {
    const a = nums[i]
    // 下面的用两数之和的解法,由于 需要处理重复数字,所以用双指针法
    let j = i + 1
    let k = len - 1
    // 当子数组符号相同,退出循环
    if (nums[k] * a > 0) { break }

    while (j < k) {
      const b = nums[j]
      const c = nums[k]
      const result = b + c + a
      if (result === 0) {
        ret.push([a, b, c])
      }
      if (result >= 0) {
        while (j < k && nums[k] === nums[--k]);
      } else {
        while (j < k && nums[j] === nums[++j]);
      }
    }
    while (nums[i] === nums[++i]);
  }

  return ret
}
// @lc code=end
