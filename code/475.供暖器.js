/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  const n = heaters.length
  heaters.sort((a, b) => a - b)
  let res = 0
  houses.forEach(house => {
    let left = 0
    let right = n
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (house < heaters[mid]) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    const d1 = (right === 0) ? Number.MAX_VALUE : Math.abs(heaters[right - 1] - house)
    const d2 = (right === n) ? Number.MAX_VALUE : Math.abs(heaters[right] - house)
    const distance = Math.min(d1, d2)
    res = Math.max(res, distance)
  })
  return res
}
// @lc code=end
console.log(findRadius([1], [1, 2, 3, 4]))
//  findRadius([1, 2, 3], [2])
