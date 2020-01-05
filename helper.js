
function ListNode (val) {
  this.val = val
  this.next = null
}

function arrayToNodes (arr) {
  const len = arr.length
  const head = new ListNode(arr[0])
  let node = head
  let i = 1
  while (i < len) {
    node.next = new ListNode(arr[i])
    node = node.next
    i++
  }
  return head
}

function nodesToArray (head) {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr
}

function test (fn, ...args) {
  const result = fn(...args)
  console.log(result)
}

module.exports = {
  ListNode,
  arrayToNodes,
  nodesToArray,
  test
}
