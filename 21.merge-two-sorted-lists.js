
/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */
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
var mergeTwoLists = function (l1, l2) {
    const mergetHead = {
        next: null,
        value: -100,
    };
    let temp = mergetHead;

    while (l1 && l2) {
        if (l1.val > l2.val) {
            temp.next = l2;
            l2 = l2.next;
        } else {
            temp.next = l1;
            l1 = l1.next;
        }
        temp = temp.next;
    }
    temp.next = l1 || l2;

    return mergetHead.next;

};

