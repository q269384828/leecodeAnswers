/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!word) {
    return true
  }
  const wordArr = word.split('')
  const head = wordArr[0]
  const height = board.length
  if (!height) {
    return false
  }
  const width = board[0].length

  const findExist = function (i, j, index) {
    // 因为已经将匹配过的字符改成了 '-', 所以不用考虑'回头匹配'的问题
    if (i < 0 || j < 0 || i >= height || j >= width || (index >= wordArr.length) || wordArr[index] !== board[i][j]) {
      return false
    }
    if (index === (wordArr.length - 1)) {
      return true
    }
    // 这里使用回溯
    const char = board[i][j]
    // 将已经遍历过的改成非字母
    board[i][j] = '-'
    const result = findExist(i - 1, j, index + 1) ||
            findExist(i + 1, j, index + 1) ||
            findExist(i, j - 1, index + 1) ||
            findExist(i, j + 1, index + 1)
    board[i][j] = char
    return result
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (findExist(i, j, 0, [])) {
        return true
      }
    }
  }
  return false
}
// @lc code=end

module.exports = {
  exist
}
