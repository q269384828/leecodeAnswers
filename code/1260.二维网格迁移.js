/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 *
 * [1260] 二维网格迁移
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  // 1.先排除移动超过一个大轮回的数
  const n = grid.length
  const m = grid[0].length
  const newGrid = Array(n).fill([]).map(a => Array(m).fill(0))
  // new position : i=
  k = k % (n * m)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const jPos = j + k
      const newJ = jPos % m
      const newI = (i + Math.floor(jPos / m)) % n
      newGrid[newI][newJ] = grid[i][j]
    }
  }
  return newGrid
}
// @lc code=end

const { test } = require('../helper')
test(shiftGrid, [[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)
