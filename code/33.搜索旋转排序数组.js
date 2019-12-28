/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  function findRotateIndex (left, right) {
    if (nums[left] < nums[right]) {
      return 0
    }
    while (left <= right) {
      const pivot = Math.floor((left + right) / 2)
      if (nums[pivot] > nums[pivot + 1]) {
        return pivot + 1
      }

      if (nums[pivot] < nums[left]) {
        right = pivot - 1
      } else {
        left = pivot + 1
      }
    }
    return 0
  }
  function binarySearch (left, right) {
    while (left <= right) {
      const pivot = Math.floor((left + right) / 2)
      if (nums[pivot] === target) {
        return pivot
      }

      if (nums[pivot] > target) {
        right = pivot - 1
      } else {
        left = pivot + 1
      }
    }
    return -1
  }
  const len = nums.length

  const rotateIndex = findRotateIndex(0, len - 1)
  const min = nums[rotateIndex]
  if (target < min) { return -1 }
  if (target === min) { return rotateIndex }
  if (rotateIndex === 0) { return binarySearch(0, len - 1) }
  if (target >= nums[0]) {
    return binarySearch(0, rotateIndex - 1)
  }
  return binarySearch(rotateIndex, len - 1)
}
// @lc code=end
/**
 * 1. 二分查找的应用
 * 2. 边界处理
 * 3. 旋转数组的特征:
 *    1. 旋转将数组分为两段,前后半段都单调递增,前半段都比后半段大
 *    2. 后半段开头是最小值,前半段结尾是最大值
 *    3. 用 nums[i]>nums[i+1] 来判断 突变的位置
 *    4. nums[left]是整个序列的中间值, 用nums[left]对比中间值选择区间,nums[left]<nums[point] 突变点在右边
 */
