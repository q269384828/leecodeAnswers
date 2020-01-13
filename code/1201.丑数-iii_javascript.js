/*
 * @lc app=leetcode.cn id=1201 lang=javascript
 *
 * [1201] 丑数 III
 */

// @lc code=start

function gcd (a, b) {
  if (a < b) {
    const t = a
    a = b
    b = t
  }
  while (a % b) {
    const temp = a % b
    a = b
    b = temp
  }
  return b
}

function lcm (a, b) {
  return a * (b / gcd(a, b))
}

function min (a, b) {
  if (a > b) {
    return b
  }
  return a
}
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function (n, a, b, c) {
  const bigA = BigInt(a)
  const bigB = BigInt(b)
  const bigC = BigInt(c)
  const bigN = BigInt(n)
  let left = min(bigA, min(bigB, bigC))

  let right = min(BigInt(2 * 10e9), left * bigN)

  const ab = lcm(bigA, bigB)
  const ac = lcm(bigA, bigC)
  const bc = lcm(bigB, bigC)
  const abc = lcm(ab, bigC)
  while (left <= right) {
    const mid = (right + left) / BigInt(2)
    const count = parseInt(mid / bigA) + parseInt(mid / bigB) + parseInt(mid / bigC) -
      parseInt(mid / ab) - parseInt(mid / ac) - parseInt(mid / bc) + parseInt(mid / abc)
    if (count < n) {
      left = mid + BigInt(1)
    } else {
      right = mid - BigInt(1)
    }
  }
  return Number(left + '')
}
// @lc code=end

// console.log(nthUglyNumber(3, 2, 3, 5))
// 73442282232513950
// 73442282232513951
// 146884564465027900
// 146884564465027902‬
console.log(gcd(336916467, 217983653))
console.log(nthUglyNumber(1000000000, 2, 217983653, 336916467))
// 超时
// var nthUglyNumber = function (n, a, b, c) {
//   let num = 0
//   let count = 0
//   while (count < n && ++num) {
//     if (num % a === 0 || num % b === 0 || num % c === 0) {
//       count++
//     }
//   }
//   return num
// }
