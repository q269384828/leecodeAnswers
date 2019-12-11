/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true
  }
  // 卫语句排除了同时为null的情况
  // 所以 下面 一方为null时，另一方必定不为null
  // 简写形式

  // if (!p||!q||p.val!==q.val) {
  //     return false;
  // }

  if (p === null && q) {
    return false
  }

  if (p && q == null) {
    return false
  }

  if (p.val !== q.val) {
    return false
  }

  if (!isSameTree(p.left, q.left)) {
    return false
  }
  if (!isSameTree(p.right, q.right)) {
    return false
  }

  return true
}
