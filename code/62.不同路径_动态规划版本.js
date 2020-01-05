// var uniquePaths = function (m, n) {
//   const dp = Array(m).fill([]).map(a => new Array(n).fill(0))
//   for (let i = 0; i < m; i++) { dp[i][0] = 1 }
//   for (let i = 0; i < n; i++) { dp[0][i] = 1 }
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
//     }
//   }
//   return dp[m - 1][n - 1]
// }

// 优化一:用pre保存上一行的值

// var uniquePaths = function (m, n) {
//   const cur = Array(m).fill(1)
//   let pre = Array(n).fill(1)
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       cur[j] = cur[j - 1] + pre[j]
//     }
//     pre = cur.slice()
//   }
//   return cur[n - 1]
// }

// 优化二:利用两边数字的对称性
function uniquePaths (m, n) {
  const cur = Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      cur[j] += cur[j - 1]
    }
  }
  return cur[n - 1]
}

console.log(uniquePaths(7, 3))
