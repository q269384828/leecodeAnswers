/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
function swap (arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function reverse (arr, i) {
  let j = arr.length - 1
  while (i < j) {
    swap(arr, i, j)
    i++
    j--
  }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }
  if (i >= 0) {
    let j = nums.length - 1
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }
    swap(nums, i, j)
  }
  reverse(nums, i + 1)
}

// @lc code=end

/**
 * 说明:  降序排列--> 最大, 反转-->最小
 *    1. 如果 数组本身就是 降序排列,反转一下,
 *    2. 从数组后面向前扫描,发现如果是降序排列的就继续,找出降序的最大子序列,然后子序列替换前一个的值,反转
 */
