/*
 * @lc app=leetcode.cn id=769 lang=javascript
 *
 * [769] 最多能完成排序的块
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let leftMax = arr[0]
  const len = arr.length
  let res = 0
  for (let i = 0; i < len; i++) {
    if (leftMax < arr[i]) {
      leftMax = arr[i]
    }
    if (leftMax === i) {
      res++
    }
  }
  return res
}
// @lc code=end
