/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0
  }
  const list = [root]
  let count = 0
  while (list.length) {
    const node = list.pop()

    const leftNode = node.left
    const rightNode = node.right
    if (leftNode) {
      if (!leftNode.left && !leftNode.right) {
        count += leftNode.val
      } else {
        list.push(node.left)
      }
    }
    if (rightNode && (rightNode.left || rightNode.right)) {
      list.push(rightNode)
    }
  }
  return count
}
// @lc code=end
