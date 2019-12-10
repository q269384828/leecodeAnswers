/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (66.60%)
 * Likes:    276
 * Dislikes: 0
 * Total Accepted:    19.8K
 * Total Submissions: 29.7K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 
 * 
 * 上图为 8 皇后问题的一种解法。
 * 
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 * 
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 示例:
 * 
 * 输入: 4
 * 输出: [
 * ⁠[".Q..",  // 解法 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 * 
 * ⁠["..Q.",  // 解法 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * 解释: 4 皇后问题存在两个不同的解法。
 * 
 * 
 */

// @lc code=start
function canSet(checkerboard, row, col) {
    const len = checkerboard.length;
    for (let currentRow = 0; currentRow < row; currentRow++) {
        // 头上有Q
        if (checkerboard[currentRow][col] === 'Q') {
            return false;
        }
    }
    let colLeft = col;
    let colRight = col;
    while (row >= 0) {
        if (colLeft >= 0 && checkerboard[row][colLeft] === 'Q') {
            return false;
        }
        if (colRight < len && checkerboard[row][colRight] === 'Q') {
            return false;
        }
        colLeft--;
        colRight++;
        row--;
    }

    return true;
}
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let list = [];
    let checkerboard = new Array(n).fill([]).map(() => new Array(n).fill('.'));
    function search(row, board) {
        if (row === n) {
            list.push(board.map(a => a.join('')));
            return;
        }
        for (let column = 0; column < n; column++) {
            if (canSet(board, row, column)) {
                board[row][column] = 'Q';
                search(row + 1, board)
                board[row][column] = '.';
            }
        }
    }
    search(0, checkerboard);
    return list;
};
// @lc code=end