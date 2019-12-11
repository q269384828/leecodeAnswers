/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = {}
  while (n > 1 && !map[n]) {
    map[n] = true
    n = count(n)
  }
  return n === 1
}

function count (n) {
  var digit = 0
  var sum = 0
  while (n > 0) {
    digit = n % 10
    n = parseInt(n / 10)
    sum += digit * digit
  }
  return sum
}
