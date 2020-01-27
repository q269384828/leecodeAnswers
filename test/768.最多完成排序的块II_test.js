const { maxChunksToSorted } = require('../code/768.最多能完成排序的块-ii')

const { test } = require('../helper')
test(maxChunksToSorted, [5, 4, 3, 2, 1])
test(maxChunksToSorted, [2, 1, 3, 4, 4])
test(maxChunksToSorted, [1, 1, 0, 0, 1])
