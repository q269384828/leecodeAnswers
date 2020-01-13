/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const nums = [1]

  let index2 = 0
  let index3 = 0
  let index5 = 0

  while (nums.length < n) {
    const value2 = nums[index2] * 2
    const value3 = nums[index3] * 3
    const value5 = nums[index5] * 5
    const temp = Math.min(value2, value3, value5)
    if (temp === value2) {
      index2++
    }
    if (temp === value3) {
      index3++
    }
    if (temp === value5) {
      index5++
    }
    nums.push(temp)
  }
  return nums.pop()
}
// @lc code=end
