/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start

function doMerge (intervals) {
  let aIdx = 0
  const ret = []
  console.log(intervals)

  while (aIdx < (intervals.length - 1)) {
    const a = intervals[aIdx]
    const b = intervals[aIdx + 1]
    if (a[1] >= b[0]) {
      ret.push([a[0], Math.max(b[1], a[1])])
      aIdx += 2
    } else {
      ret.push([a[0], a[1]])
      aIdx += 1
    }
  }
  if (aIdx < intervals.length) {
    ret.push(intervals[aIdx])
    aIdx++
  }

  //
  let i = 0
  let isFinal = true
  while (i < ret.length - 1) {
    if (ret[i][1] >= ret[i + 1][0]) {
      isFinal = false
      break
    }
    i++
  }
  if (!isFinal) {
    return doMerge(ret)
  }
  return ret
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // const len = intervals.length

  // if (len < 2) {
  //   return intervals
  // }
  // intervals.sort((a, b) => a[0] - b[0])
  // return doMerge(intervals)
  const merged = []
  intervals.sort((a, b) => a[0] - b[0])
  for (let index = 0; index < intervals.length; index++) {
    const current = intervals[index]
    if (merged.length === 0 || current[0] > merged[merged.length - 1][1]) {
      merged.push(current)
    } else {
      merged[merged.length - 1][1] = Math.max(current[1], merged[merged.length - 1][1])
    }
  }
  return merged
}

// @lc code=end

module.exports = {
  merge
}
