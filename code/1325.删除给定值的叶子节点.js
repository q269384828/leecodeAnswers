/*
 * @lc app=leetcode.cn id=1325 lang=javascript
 *
 * [1325] 删除给定值的叶子节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
  function helper (node) {
    if (!node) {
      return null
    }
    node.left = helper(node.left)
    node.right = helper(node.right)
    if (!node.left && !node.right && node.val === target) {
      return null
    }
    return node
  }
  root = helper(root)
  return root
}
// @lc code=end
