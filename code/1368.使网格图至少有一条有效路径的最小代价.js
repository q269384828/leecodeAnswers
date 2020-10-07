/*
 * @lc app=leetcode.cn id=1368 lang=javascript
 *
 * [1368] 使网格图至少有一条有效路径的最小代价
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
  if (!grid.length) {
    return 0
  }
  const m = grid.length
  const n = grid[0].length
  const distance = Array.from({ length: m * n }).fill(Number.MAX_VALUE)
  const seem = Array.from({ length: m * n }).fill(false)
  const dirs = [
    [0, 1], [0, -1],
    [1, 0], [-1, 0]
  ]
  const list = [0] // position
  distance[0] = 0

  while (list.length) {
    // console.log(seem)
    // console.log(list)
    const pos = list.pop()
    const dis = distance[pos]
    const x = Math.floor(pos / n)
    const y = Math.floor(pos % n)

    if (seem[pos]) {
      continue
    }
    seem[pos] = true
    for (let i = 0; i < dirs.length; i++) {
      const [insX, insY] = dirs[i]
      const newX = x + insX
      const newY = y + insY
      const newPos = newX * n + newY
      // eslint-disable-next-line no-unused-expressions
      const newDis = dis + Number(grid[x][y] !== i + 1)
      if (newX >= 0 && newX < m && newY < n && newY >= 0 && newDis < distance[newPos]) {
        // console.log(`(${x},${y})===>(${newX},${newY})`)
        distance[newPos] = newDis
        // 贪心
        if (grid[x][y] === i + 1) {
          list.push(newPos)
        } else {
          list.unshift(newPos)
        }
      }
    }
  }
  return distance[m * n - 1]
}
// @lc code=end

// var input = [
//   [1, 1, 1, 1],
//   [2, 2, 2, 2],
//   [1, 1, 1, 1],
//   [2, 2, 2, 2]
// ]

// var r = minCost(input)
// console.log(r)

var i2 = [
  [1, 1, 3],
  [3, 2, 2],
  [1, 1, 4]
]
var r2 = minCost(i2)
console.log(r2)
