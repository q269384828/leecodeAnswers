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
  let radius = 0
  for (let houseIndex = 0; houseIndex < houses.length; houseIndex++) {
    const house = houses[houseIndex]
    let radiusTmp = 0
    for (let i = 0; i < heaters.length; i++) {
      const heater = heaters[i]
      const tmp = Math.abs(heater - house)
      if (!radiusTmp) {
        radiusTmp = tmp
      } else if (tmp < radiusTmp) {
        radiusTmp = tmp
      }
    }
    if (!radius) {
      radius = radiusTmp
    } else if (radiusTmp > radius) {
      radius = radiusTmp
    }
  }

  return radius
}
// @lc code=end
console.log(findRadius([1, 2, 3], [2]))
//  findRadius([1, 2, 3], [2])
