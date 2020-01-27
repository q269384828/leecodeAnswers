/*
 * @lc app=leetcode.cn id=768 lang=javascript
 *
 * [768] 最多能完成排序的块 II
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const sortArr = arr.slice().sort((a, b) => a - b)
  let leftMax = -1
  let res = 0

  for (let i = 0; i < arr.length; i++) {
    let sortIndex = -1
    if (leftMax < arr[i]) {
      leftMax = arr[i]
    } else if (leftMax === arr[i]) {
      sortIndex = sortArr.indexOf(leftMax)
      sortArr[sortIndex] = -1
    }
    sortIndex = sortArr.indexOf(leftMax)
    if (sortIndex === i) {
      res++
    }
  }
  return res
}
// @lc code=end
module.exports = {
  maxChunksToSorted
}
