/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  return queries.map(function (query) {
    const [left, right] = query
    return xorEach(arr, left, right)
  })
}

function xorEach (arr, left, right) {
  let result = arr[left]
  for (left++; left <= right; left++) {
    result = result ^ arr[left]
  }
  return result
}

var arr = [1, 3, 4, 8]
var queries = [[0, 1], [1, 2], [0, 3], [3, 3]]
const { test } = require('../helper')
test(xorQueries, arr, queries)
