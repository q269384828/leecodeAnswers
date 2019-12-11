/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n
  }
  var n1 = 1
  var n2 = 2
  var ret = 0
  for (var i = 2; i < n; i++) {
    ret = n1 + n2
    n1 = n2
    n2 = ret
  }
  return ret
}
