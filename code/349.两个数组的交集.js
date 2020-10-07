/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map = {}
  const ret = []
  nums1.forEach(num => {
    map[num] = 1
  })
  nums2.forEach(num => {
    if (map[num] && map[num] < 2) {
      ret.push(num)
      map[num] += 1
    }
  })
  return ret
}
// @lc code=end
