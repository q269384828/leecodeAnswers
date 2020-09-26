/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Node = function (val) {
  this.next = null
  this.val = val
  this.prev = null
}

var MyLinkedList = function () {
  this.head = null
  this.tail = null
  this.length = 0
}

MyLinkedList.prototype.isValidateIndex = function (index) {
  return index < this.length && index >= 0
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  const node = this.findNode(index)
  return node ? node.val : -1
}

MyLinkedList.prototype.findNode = function (index) {
  if (!this.isValidateIndex(index)) {
    return null
  }
  if (index === this.length - 1) {
    return this.tail
  }
  let i = 0
  let node = this.head
  while (node) {
    if (index === i) {
      return node
    }
    i++
    node = node.next
  }
  return null
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val)
  if (this.head) {
    node.next = this.head
    this.head.prev = node
    this.head = node
  } else {
    this.head = node
    this.tail = node
  }
  this.length++
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val)
  if (this.tail) {
    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  } else {
    this.head = node
    this.tail = node
  }
  this.length++
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === this.length) {
    return this.addAtTail(val)
  }
  if (index === 0) {
    return this.addAtHead(val)
  }
  const node = this.findNode(index)
  if (node) {
    const newNode = new Node(val)
    node.prev.next = newNode
    newNode.prev = node.prev

    node.prev = newNode
    newNode.next = node

    this.length++
  }
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index === 0) {
    this.head = this.head.next
    if (this.head) {
      this.head.prev = null
    }
    this.length--
    return
  }
  if (index === this.length - 1) {
    this.tail = this.tail.prev
    this.length--
    return
  }
  const node = this.findNode(index)
  if (node) {
    node.prev.next = node.next
    node.next.prev = node.prev
    this.length--
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
