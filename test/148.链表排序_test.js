const { sortList } = require('../code/148.排序链表')
const { test, arrayToNodes, nodesToArray } = require('../helper')

var nodeList = arrayToNodes([3, 4, 6, 8, 1, 2, 7])
var rawResult = test(sortList, nodeList)
console.log(nodesToArray(rawResult))
