/*
 * @lc app=leetcode.cn id=873 lang=javascript
 *
 * [873] 最长的斐波那契子序列的长度
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function (A) {
  let count = 0
  let maxCount = 0
  for (let i = 0; i < A.length - 2; i++) {
    const numI = A[i]
    for (let j = i + 1; j < A.length - 1; j++) {
      const numJ = A[j]
      let a = numI
      let b = numJ
      count = 0

      for (let k = j + 1; k < A.length; k++) {
        const c = a + b
        if (A[k] === c) {
          a = b
          b = c
          if (count === 0) {
            count = 3
          } else {
            count++
          }
        }
      }
      if (count > maxCount) {
        maxCount = count
      }
    }
  }
  return maxCount
}
// @lc code=end
console.log(lenLongestFibSubseq([2, 4, 7, 8, 9, 10, 14, 15, 18, 23, 32, 50]
))
