/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const node = new ListNode(0)
  let ret = node
  let ten = 0
  while (l1 && l2) {
    const count = l1.val + l2.val + ten
    const newTen = Math.floor(count / 10)
    ret.next = new ListNode(count % 10)
    ret = ret.next
    ten = newTen
    l1 = l1.next
    l2 = l2.next
  }
  let leaf = l1 || l2
  while (leaf) {
    const count = leaf.val + ten
    const newTen = Math.floor(count / 10)
    ret.next = new ListNode(count % 10)
    ret = ret.next
    ten = newTen
    leaf = leaf.next
  }
  if (ten) {
    ret.next = new ListNode(ten)
  }
  return node.next
}
// @lc code=end
function ListNode (val) {
  this.val = val
  this.next = null
}
// TODO: 使用 || 合并三种情形
