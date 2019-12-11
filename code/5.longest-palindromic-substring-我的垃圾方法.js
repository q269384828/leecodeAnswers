/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s
  }
  const len = s.length
  const map = {}
  for (let index = 0; index < len - 1; index++) {
    const self = s.charAt(index)
    const next = s.charAt(index + 1)
    map[index] = [index]

    if (self === next) {
      map[index].push(index + 1)
    }

    if (index > 0) {
      const before = s.charAt(index - 1)
      if (before === next) {
        if (!map[index - 1]) {
          map[index - 1] = []
        }
        map[index - 1].push(index + 1)
      }
    }
  }
  return s.slice.apply(s, getLongest(map, s, [0, 1]))
}

function getLongest (map, s, idxList) {
  const newMap = {}
  for (const i in map) {
    const jList = map[i]
    for (let index = 0; index < jList.length; index++) {
      const j = jList[index]
      const currentLen = j + 1 - i
      if (currentLen > idxList[1] - idxList[0]) {
        idxList = [i, j + 1]
      }
      if (i > 0 && j < s.length - 1 && s.charAt(i - 1) === s.charAt(j + 1)) {
        if (!newMap[i - 1]) {
          newMap[i - 1] = []
        }
        newMap[i - 1].push(j + 1)
      }
    }
  }
  if (!Object.keys(newMap).length) {
    return idxList
  }

  return getLongest(newMap, s, idxList)
}
// @lc code=end
