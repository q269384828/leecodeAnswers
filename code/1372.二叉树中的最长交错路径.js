/*
 * @lc app=leetcode.cn id=1372 lang=javascript
 *
 * [1372] 二叉树中的最长交错路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
  let result = 0
  function helper (root) {
    if (!root) {
      return { right: 0, left: 0 }
    }
    const left = helper(root.left).right + 1
    const right = helper(root.right).left + 1
    result = Math.max(result, right, left)
    return {
      right,
      left
    }
  }
  helper(root)
  return result - 1
}

// var longestZigZag = function (root) {
//     function helper(root, dir = -1, length = 0) {
//         if (!root) return length
//         var left = helper(root.left, 0, ~dir ? (dir ? length + 1 : 0) : 0)
//         var right = helper(root.right, 1, ~dir ? (dir ? 0 : length + 1) : 0)
//         return Math.max(left, right)
//     }

//     return helper(root)
// }
// @lc code=end
