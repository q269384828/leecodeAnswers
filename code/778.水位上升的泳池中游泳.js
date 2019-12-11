/*
 * @lc app=leetcode.cn id=778 lang=javascript
 *
 * [778] 水位上升的泳池中游泳
 *
 * https://leetcode-cn.com/problems/swim-in-rising-water/description/
 *
 * algorithms
 * Hard (45.23%)
 * Likes:    23
 * Dislikes: 0
 * Total Accepted:    1.3K
 * Total Submissions: 3K
 * Testcase Example:  '[[0,2],[1,3]]'
 *
 * 在一个 N x N 的坐标方格 grid 中，每一个方格的值 grid[i][j] 表示在位置 (i,j) 的平台高度。
 *
 * 现在开始下雨了。当时间为 t 时，此时雨水导致水池中任意位置的水位为 t
 * 。你可以从一个平台游向四周相邻的任意一个平台，但是前提是此时水位必须同时淹没这两个平台。假定你可以瞬间移动无限距离，也就是默认在方格内部游动是不耗时的。当然，在你游泳的时候你必须待在坐标方格里面。
 *
 * 你从坐标方格的左上平台 (0，0) 出发。最少耗时多久你才能到达坐标方格的右下平台 (N-1, N-1)？
 *
 * 示例 1:
 *
 *
 * 输入: [[0,2],[1,3]]
 * 输出: 3
 * 解释:
 * 时间为0时，你位于坐标方格的位置为 (0, 0)。
 * 此时你不能游向任意方向，因为四个相邻方向平台的高度都大于当前时间为 0 时的水位。
 *
 * 等时间到达 3 时，你才可以游向平台 (1, 1). 因为此时的水位是 3，坐标方格中的平台没有比水位 3
 * 更高的，所以你可以游向坐标方格中的任意位置
 *
 *
 * 示例2:
 *
 *
 * 输入:
 * [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
 * 输入: 16
 * 解释:
 * ⁠0  1  2  3  4
 * 24 23 22 21  5
 * 12 13 14 15 16
 * 11 17 18 19 20
 * 10  9  8  7  6
 *
 * 最终的路线用加粗进行了标记。
 * 我们必须等到时间为 16，此时才能保证平台 (0, 0) 和 (4, 4) 是连通的
 *
 *
 * 提示:
 *
 *
 * 2 <= N <= 50.
 * grid[i][j] 位于区间 [0, ..., N*N - 1] 内。
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const len = grid.length
  const visitedArr = Array.apply(null, { length: len }).map(e => Array.apply(null, { length: len }).fill(false))
  visitedArr[0][0] = true
  let min = -1
  let possibly = 0
  const now = Date.now()
  function search (spend, row, col, deep) {
    if (row === (len - 1) && col === (len - 1)) {
      possibly++
      if (min === -1) {
        min = spend
        return
      }
      min = Math.min(min, spend)
      return
    }

    const value = grid[row][col]
    // 只去最小的平台
    // 上
    if (row > 0) {
      searchNext(row - 1, col, spend, value, deep)
      // 上-左
      if (col > 0) {
        searchNext(row - 1, col - 1, spend, value, deep)
      }
      if (col < len - 1) {
        searchNext(row - 1, col + 1, spend, value, deep)
      }
    }
    // 中
    if (col > 0) {
      searchNext(row, col - 1, spend, value, deep)
    }
    if (col < len - 1) {
      searchNext(row, col + 1, spend, value, deep)
    }
    // 下
    if (row < len - 1) {
      searchNext(row + 1, col, spend, value, deep)
      // 上-左
      if (col > 0) {
        searchNext(row + 1, col - 1, spend, value, deep)
      }
      if (col < len - 1) {
        searchNext(row + 1, col + 1, spend, value, deep)
      }
    }
  }

  const searchNext = function (nextRow, nextCol, currentTime, value, deep) {
    if (!visitedArr[nextRow][nextCol]) {
      visitedArr[nextRow][nextCol] = true
      let time = grid[nextRow][nextCol] - value
      if (time < 0) {
        time = 0
      }
      search(currentTime + time, nextRow, nextCol, deep + 1)
      visitedArr[nextRow][nextCol] = false
    }
  }

  search(0, 0, 0, 0)
  console.log('possibly', possibly)
  console.log(`spend ${Date.now() - now}ms`)
  return min
}
// @lc code=end

// var res = swimInWater([
//     [0, 1, 2, 3, 4],
//     [24, 23, 22, 21, 5],
//     [12, 13, 14, 15, 16],
//     [11, 17, 18, 19, 20],
//     [10, 9, 8, 7, 6]
// ])

var res = swimInWater([
  [0, 1, 2, 3, 4],
  [24, 23, 22, 21, 5],
  [12, 13, 14, 15, 16],
  [11, 17, 18, 19, 20],
  [10, 9, 8, 7, 6]
])

// var res = swimInWater([[0, 2], [1, 3]])
console.log(res)
