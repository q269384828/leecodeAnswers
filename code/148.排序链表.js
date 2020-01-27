/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */
function ListNode (val) {
  this.val = val
  this.next = null
}
// @lc code=start

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  let size = 1
  let len = 0
  const pre = new ListNode(0)
  pre.next = head
  let node = head
  while (node) {
    len++
    node = node.next
  }
  while (size < len) {
    let node = pre
    while (node) {
      node = sortSubList(node, size)
    }
    size *= 2
  }
  return pre.next
}

function sortSubList (pre, midInt) {
  let leftIndex = 0
  let rightIndex = 0
  if (midInt <= 0) {
    return pre.next
  }
  let left = pre.next
  let right = pre.next
  // 找到右边序列的位置
  let temp = midInt
  while (temp--) {
    if (!right) {
      return right
    }
    right = right.next
  }

  while (leftIndex < midInt && rightIndex < midInt && right) {
    // 思路：不是让两个数字交换位置，而是让pre指针将链表串起来

    if (left.val <= right.val) {
      pre.next = left
      left = left.next
      leftIndex++
    } else {
      pre.next = right
      right = right.next
      rightIndex++
    }
    pre = pre.next
  }
  if (leftIndex < midInt) {
    pre.next = left
    for (; leftIndex < midInt; leftIndex++) {
      pre = pre.next
    }
    pre.next = right
  }

  if (rightIndex < midInt && right) {
    pre.next = right
    for (; rightIndex < midInt && pre; rightIndex++) {
      pre = pre.next
    }
  }
  return pre
}
// @lc code=end

module.exports = {
  sortList
}
