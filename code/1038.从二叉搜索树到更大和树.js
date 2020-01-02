/*
 * @lc app=leetcode.cn id=1038 lang=javascript
 *
 * [1038] 从二叉搜索树到更大和树
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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  let max = 0
  function walk (node) {
    if (!node) {
      return
    }
    walk(node.right)
    max += node.val
    node.val = max
    walk(node.left)
  }
  walk(root)
  return root
}
// @lc code=end
