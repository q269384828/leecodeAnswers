/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function helper (node, nums) {
  if (!node) {
    return
  }
  helper(node.left, nums)
  nums.push(node.val)
  helper(node.right, nums)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const ret = []
  helper(root, ret)
  return ret
}
// @lc code=end
