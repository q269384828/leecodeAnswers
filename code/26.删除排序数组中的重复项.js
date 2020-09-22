/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const map = {}
  let writeIndex = 0

  if (!nums.length) {
    return 0
  }

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index]
    if (map[num] == null) {
      map[num] = index
      nums[writeIndex] = num
      writeIndex++
    }
  }
  return Object.keys(map).length
}
// @lc code=end
