/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const start = -1
  const pos = 0
  function binarySearch (left, right) {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
        if (start) {

        }
      }
    }
  }
}
// @lc code=end
