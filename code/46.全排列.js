/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (72.61%)
 * Likes:    465
 * Dislikes: 0
 * Total Accepted:    61.2K
 * Total Submissions: 84K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 *
 * 示例:
 *
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 *
 */

// @lc code=start

function swap (nums, a, b) {
  if (a !== b) {
    const temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
  }
}

function backtrack (first, nums, list) {
  if (first === nums.length) {
    list.push([...nums])
    return
  }
  // let newNums = [];
  for (let i = first; i < nums.length; i++) {
    swap(nums, first, i)
    // 注意: for循环里面,不能用++
    backtrack(first + 1, nums, list)
    swap(nums, first, i)
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // 我的解法:从数组中每次抽取出一个数字进行排列
  // 收集所有情形
  // let list = [];

  // function recurrent(base, unlistNums) {
  //     if (!unlistNums.length) {
  //         list.push(base);
  //         return;
  //     }
  //     unlistNums.forEach(element => {
  //         recurrent(base.concat(element), unlistNums.filter(e => e !== element))
  //     });
  // }
  // recurrent([], nums);
  // return list;

  // 官方题解:
  const list = []
  backtrack(0, nums, list)
  return list
}
// @lc code=end
