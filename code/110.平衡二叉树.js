/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 *
 * @param {TreeNode} node
 * @returns {Number} result
 */
function helper (node) {
  const unBalanced = 0
  if (node == null) {
    return 1
  }
  const left = helper(node.left)

  if (!left) {
    return unBalanced
  }
  const right = helper(node.right)

  if (!right) {
    return unBalanced
  }
  if (Math.abs(left - right) <= 1) {
    return Math.max(left, right) + 1
  }
  return unBalanced
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return !!helper(root)
}
// @lc code=end
