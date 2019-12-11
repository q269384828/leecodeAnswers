/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 *
 * https://leetcode-cn.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (75.92%)
 * Likes:    85
 * Dislikes: 0
 * Total Accepted:    12.5K
 * Total Submissions: 16.4K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 *
 *
 * 上图为 8 皇后问题的一种解法。
 *
 * 给定一个整数 n，返回 n 皇后不同的解决方案的数量。
 *
 * 示例:
 *
 * 输入: 4
 * 输出: 2
 * 解释: 4 皇后问题存在如下两个不同的解法。
 * [
 * [".Q..",  // 解法 1
 * "...Q",
 * "Q...",
 * "..Q."],
 *
 * ["..Q.",  // 解法 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 *
 *
 */

// @lc code=start
function canSet (checkerboard, row, col) {
  const len = checkerboard.length
  for (let currentRow = 0; currentRow < row; currentRow++) {
    // 头上有Q
    if (checkerboard[currentRow][col] === 'Q') {
      return false
    }
  }
  let colLeft = col
  let colRight = col
  while (row >= 0) {
    if (colLeft >= 0 && checkerboard[row][colLeft] === 'Q') {
      return false
    }
    if (colRight < len && checkerboard[row][colRight] === 'Q') {
      return false
    }
    colLeft--
    colRight++
    row--
  }

  return true
}
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const list = []
  const checkerboard = new Array(n).fill([]).map(() => new Array(n).fill('.'))
  function search (row, board) {
    if (row === n) {
      list.push(board.map(a => a.join('')))
      return
    }
    for (let column = 0; column < n; column++) {
      if (canSet(board, row, column)) {
        board[row][column] = 'Q'
        search(row + 1, board)
        board[row][column] = '.'
      }
    }
  }
  search(0, checkerboard)
  return list.length
}
// @lc code=end
