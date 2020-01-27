/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
function add (queue, set, a, b) {
  if (set.has('' + [a, b])) {
    return
  }
  queue.push([a, b])
  set.add('' + [a, b])
}
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
  const start = [0, 0]
  const queue = [start]
  const set = new Set()
  set.add('' + start)
  while (queue.length) {
    const [a, b] = queue.shift()
    if (a === z || b === z || (a + b) === z) {
      return true
    }
    add(queue, set, x, b)
    add(queue, set, a, y)
    add(queue, set, 0, b)
    add(queue, set, a, 0)
    add(queue, set, a - Math.min(a, y - b), b + Math.min(a, y - b))
    add(queue, set, a + Math.min(b, x - a), b - Math.min(b, x - a))
  }
  return false
}
// @lc code=end
