/*
 * @lc app=leetcode.cn id=881 lang=javascript
 *
 * [881] 救生艇
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b)
  let start = 0
  const len = people.length
  let count = 0
  let right = len - 1
  for (; right >= start; right--) {
    const r = people[right]
    const l = people[start]
    if ((r + l) <= limit) {
      start++
    }
    count++
  }
  return count
}
// @lc code=end

/**
 * 贪婪算法(双执政)
 *
 */
