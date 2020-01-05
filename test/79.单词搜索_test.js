
const { exist } = require('../code/79.单词搜索')
const { test } = require('../helper')
const board = ['ABCE'.split(''), 'SFCS'.split(''), 'ADEE'.split('')]

test(exist, board, 'ABCCED')
