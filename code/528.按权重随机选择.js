/*
 * @lc app=leetcode.cn id=528 lang=javascript
 *
 * [528] 按权重随机选择
 */

// @lc code=start
/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.range = []
  this.w = w
  const count = w.reduce((pre, current) => pre + current, 0)
  w.forEach((wegiht, index) => {
    this.range[index] = (wegiht / count) + (index < 1 ? 0 : this.range[index - 1])
  })
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const target = Math.random()
  let left = 0
  let right = this.range.length - 1
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (this.range[mid] >= target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  if (this.range[left] >= target) {
    return left
  }
  return right
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end
