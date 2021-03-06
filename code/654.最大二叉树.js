/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 *
 * https://leetcode-cn.com/problems/maximum-binary-tree/description/
 *
 * algorithms
 * Medium (77.47%)
 * Likes:    91
 * Dislikes: 0
 * Total Accepted:    8.7K
 * Total Submissions: 11.2K
 * Testcase Example:  '[3,2,1,6,0,5]'
 *
 * 给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：
 *
 *
 * 二叉树的根是数组中的最大元素。
 * 左子树是通过数组中最大值左边部分构造出的最大二叉树。
 * 右子树是通过数组中最大值右边部分构造出的最大二叉树。
 *
 *
 * 通过给定的数组构建最大二叉树，并且输出这个树的根节点。
 *
 *
 *
 * 示例 ：
 *
 * 输入：[3,2,1,6,0,5]
 * 输出：返回下面这棵树的根节点：
 *
 * ⁠     6
 * ⁠   /   \
 * ⁠  3     5
 * ⁠   \    /
 * ⁠    2  0
 * ⁠      \
 * ⁠       1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 给定的数组的大小在 [1, 1000] 之间。
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}
function getRoot (nums, left, right) {
  if (left > right) {
    return null
  }
  let max = 0
  let maxIndex = -1
  for (let i = left; i <= right; i++) {
    if (i === left || nums[i] > max) {
      max = nums[i]
      maxIndex = i
    }
  }
  const node = new TreeNode(max)
  node.left = getRoot(nums, left, maxIndex - 1)
  node.right = getRoot(nums, maxIndex + 1, right)
  return node
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  return getRoot(nums, 0, nums.length - 1)
}
// @lc code=end
