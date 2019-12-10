/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 *
 * https://leetcode-cn.com/problems/max-area-of-island/description/
 *
 * algorithms
 * Medium (58.23%)
 * Likes:    155
 * Dislikes: 0
 * Total Accepted:    13.6K
 * Total Submissions: 23.1K
 * Testcase Example:  '[[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]'
 *
 * 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地)
 * 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。
 * 
 * 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
 * 
 * 示例 1:
 * 
 * 
 * [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 * ⁠[0,0,0,0,0,0,0,1,1,1,0,0,0],
 * ⁠[0,1,1,0,1,0,0,0,0,0,0,0,0],
 * ⁠[0,1,0,0,1,1,0,0,1,0,1,0,0],
 * ⁠[0,1,0,0,1,1,0,0,1,1,1,0,0],
 * ⁠[0,0,0,0,0,0,0,0,0,0,1,0,0],
 * ⁠[0,0,0,0,0,0,0,1,1,1,0,0,0],
 * ⁠[0,0,0,0,0,0,0,1,1,0,0,0,0]]
 * 
 * 
 * 对于上面这个给定矩阵应返回 6。注意答案不应该是11，因为岛屿只能包含水平或垂直的四个方向的‘1’。
 * 
 * 示例 2:
 * 
 * 
 * [[0,0,0,0,0,0,0,0]]
 * 
 * 对于上面这个给定的矩阵, 返回 0。
 * 
 * 注意: 给定的矩阵grid 的长度和宽度都不超过 50。
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const rowLen = grid.length;
    if (!rowLen) return 0;

    const columnLen = grid[0].length;

    let seen = Array.apply(null, { length: rowLen }).map(e => Array.apply(null, { length: columnLen }).fill(0));
    let max = 0;
    let currentArea = 0;
    for (let rowIndex = 0; rowIndex < rowLen; rowIndex++) {
        for (let colIndex = 0; colIndex < columnLen; colIndex++) {
            if (grid[rowIndex][colIndex] === 1 && !seen[rowIndex][colIndex]) {
                // 1. 总面积从外面传入
                currentArea = 0;
                search(rowIndex, colIndex);
                max = Math.max(max, currentArea);

            }
        }
    }

    function search(row, col) {
        // 2. 将边界和条件放到开头统一判断
        if (row < 0 || col < 0 || row > rowLen - 1 || col > columnLen - 1 || grid[row][col] !== 1 || seen[row][col]) {
            return;
        }
        currentArea++;
        // 3. 运用grid将代替seen 进行判断
        seen[row][col] = true;
        search(row - 1, col);// 上
        search(row + 1, col);// 下
        search(row, col - 1);// 左
        search(row, col + 1);// 右    
    }
    return max;
};

