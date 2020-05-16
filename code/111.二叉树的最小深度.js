/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  if (root == null) {
    return 0
  }
  let depth = 0
  let list = [root]
  while (list.length) {
    depth += 1
    const template = []
    for (let i = 0; i < list.length; i++) {
      const item = list[i]
      if (!item.left && !item.right) {
        return depth
      }
      item.left && template.push(item.left)
      item.right && template.push(item.right)
    }
    list = template
  }
  return depth
}
// @lc code=end
