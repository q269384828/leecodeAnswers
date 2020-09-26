/*
 * @lc app=leetcode.cn id=478 lang=javascript
 *
 * [478] 在圆内随机生成点
 */

// @lc code=start
/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function (radius, x_center, y_center) {
  this.radius = radius
  this.xCetner = x_center
  this.yCcenter = y_center
}

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
  const p = Math.PI
  const range = 2 * p
  const angle = Math.random() * range
  const realRadio = Math.sqrt(Math.random() * Math.pow(this.radius, 2))
  const cos = Math.cos(angle) * realRadio
  const sin = Math.sin(angle) * realRadio
  return [this.xCetner + sin, this.yCcenter + cos]
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
// @lc code=end
