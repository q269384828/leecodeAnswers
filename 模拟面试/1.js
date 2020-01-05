
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
  const findExist = function (a, b, index, seen) {
    if (a < 0 || b < 0 || a >= height || b >= width || (index >= wordArr.length) || seen.includes(a + ',' + b) || wordArr[index] !== board[a][b]) {
      return false
    }
    if (index === (wordArr.length - 1)) {
      return true
    }
    return findExist(a - 1, b, index + 1, seen.concat(a + ',' + b)) ||
              findExist(a + 1, b, index + 1, seen.concat(a + ',' + b)) ||
              findExist(a, b - 1, index + 1, seen.concat(a + ',' + b)) ||
              findExist(a, b + 1, index + 1, seen.concat(a + ',' + b))
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (board[i][j] === head && findExist(i, j, 0, [])) {
        return true
      }
    }
  }
  return false
}

var board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']]
console.log(exist([['a']], 'a'))
