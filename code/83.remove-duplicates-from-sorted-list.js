/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */
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
var deleteDuplicates = function (head) {
  var ret = head
  var temp = ret
  if (!head) {
    return ret
  }
  while (head) {
    if (temp.val !== head.val) {
      temp.next = head
      temp = temp.next
    }
    head = head.next
  }
  if (temp.next) {
    temp.next = null
  }
  return ret
}
