/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */
function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function helper (left, right) {
    if (left > right) {
      return null
    }
    const midd = (left + right) / 2 >> 0
    const root = new TreeNode(nums[midd])
    root.left = helper(left, midd - 1)
    root.right = helper(midd + 1, right)
    return root
  }
  return helper(0, nums.length - 1)
}
// @lc code=end
