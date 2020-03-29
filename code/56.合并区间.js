/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const len = intervals.length

  if (len < 2) {
    return intervals
  }
  intervals.sort((a, b) => a[0] - b[0])
  let aIdx = 0
  let scan = 0
  const ret = []
  while ((aIdx + scan) < len) {
    const a = intervals[aIdx]
    const b = intervals[aIdx + scan]
    if (a[1] >= b[0]) {
      scan++
    } else {
      const left = a[0]

      const right = Math.max(a[1], intervals[aIdx + scan - 1][1])
      ret.push([left, right])
      aIdx += scan
      scan = 0
    }
  }
  if (scan) {
    const left = intervals[aIdx][0]
    const right = Math.max(intervals[aIdx][1], intervals[len - 1][1])
    ret.push([left, right])
  }
  return ret
}

// @lc code=end
