/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 方法二, 使用 两个指针遍历一次
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const pre = new ListNode(null)
  pre.next = head
  let first = pre
  let second = pre
  let i = 0
  while (i < n) {
    i++
    second = second.next
  }
  while (second.next) {
    first = first.next
    second = second.next
  }
  first.next = first.next.next
  return pre.next
}
// @lc code=end

function ListNode (val) {
  this.val = val
  this.next = null
}

// 方法一: 使用两次遍历删除节点
// var removeNthFromEnd = function (head, n) {
//     let count = 0
//     let node = head
//     while (node) {
//       count++
//       node = node.next
//     }
//     const pre = new ListNode(null)
//     pre.next = head
//     node = pre
//     let i = 0
//     while (i < (count - n)) {
//       i++
//       node = node.next
//     }
//     node.next = node.next.next
//     return pre.next
//   }
