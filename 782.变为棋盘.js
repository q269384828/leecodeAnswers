/*
 * @lc app=leetcode.cn id=782 lang=javascript
 *
 * [782] 变为棋盘
 *
 * https://leetcode-cn.com/problems/transform-to-chessboard/description/
 *
 * algorithms
 * Hard (39.73%)
 * Likes:    13
 * Dislikes: 0
 * Total Accepted:    334
 * Total Submissions: 843
 * Testcase Example:  '[[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]'
 *
 * 一个 N x N的 board 仅由 0 和 1 组成 。每次移动，你能任意交换两列或是两行的位置。
 * 
 * 输出将这个矩阵变为 “棋盘” 所需的最小移动次数。“棋盘” 是指任意一格的上下左右四个方向的值均与本身不同的矩阵。如果不存在可行的变换，输出 -1。
 * 
 * 示例:
 * 输入: board = [[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]
 * 输出: 2
 * 解释:
 * 一种可行的变换方式如下，从左到右：
 * 
 * 0110     1010     1010
 * 0110 --> 1010 --> 0101
 * 1001     0101     1010
 * 1001     0101     0101
 * 
 * 第一次移动交换了第一列和第二列。
 * 第二次移动交换了第二行和第三行。
 * 
 * 
 * 输入: board = [[0, 1], [1, 0]]
 * 输出: 0
 * 解释:
 * 注意左上角的格值为0时也是合法的棋盘，如：
 * 
 * 01
 * 10
 * 
 * 也是合法的棋盘.
 * 
 * 输入: board = [[1, 0], [1, 0]]
 * 输出: -1
 * 解释:
 * 任意的变换都不能使这个输入变为合法的棋盘。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * board 是方阵，且行列数的范围是[2, 30]。
 * board[i][j] 将只包含 0或 1。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var movesToChessboard = function(board) {
    
};
// @lc code=end

