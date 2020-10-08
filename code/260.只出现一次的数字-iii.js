/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  // TODO:　位运算
  const map = {}
  nums.forEach(num => {
    if (map[num] === 1) {
      delete map[num]
    } else if (!map[num]) {
      map[num] = 1
    }
  })
  return [...Object.keys(map)]
}
// @lc code=end
