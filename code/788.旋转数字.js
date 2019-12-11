/*
 * @lc app=leetcode.cn id=788 lang=javascript
 *
 * [788] 旋转数字
 *
 * https://leetcode-cn.com/problems/rotated-digits/description/
 *
 * algorithms
 * Easy (57.80%)
 * Likes:    51
 * Dislikes: 0
 * Total Accepted:    7.4K
 * Total Submissions: 12.7K
 * Testcase Example:  '10'
 *
 * 我们称一个数 X 为好数, 如果它的每位数字逐个地被旋转 180 度后，我们仍可以得到一个有效的，且和 X 不同的数。要求每位数字都要被旋转。
 *
 * 如果一个数的每位数字被旋转以后仍然还是一个数字， 则这个数是有效的。0, 1, 和 8 被旋转后仍然是它们自己；2 和 5 可以互相旋转成对方；6 和
 * 9 同理，除了这些以外其他的数字旋转以后都不再是有效的数字。
 *
 * 现在我们有一个正整数 N, 计算从 1 到 N 中有多少个数 X 是好数？
 *
 *
 * 示例:
 * 输入: 10
 * 输出: 4
 * 解释:
 * 在[1, 10]中有四个好数： 2, 5, 6, 9。
 * 注意 1 和 10 不是好数, 因为他们在旋转之后不变。
 *
 *
 * 注意:
 *
 *
 * N 的取值范围是 [1, 10000]。
 *
 *
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 方法一: 用map 遍历所有值,找出 旋转数字
// var rotatedDigits = function (N) {
//     const map = {
//         '0': '0',
//         '1': '1',
//         '2': '5',
//         '5': '2',
//         '6': '9',
//         '8': '8',
//         '9': '6',
//     };

//     let sum = 0;
//     let ret = [];

//     function isRotate(num) {
//         const numberArrs = num.toString().split('');
//         let str = '';
//         for (let index = 0; index < numberArrs.length; index++) {
//             const n = numberArrs[index];
//             const rotateNumber = map[n];
//             if (!rotateNumber) {
//                 // 失败返回
//                 return false;
//             }
//             str += rotateNumber;
//         }
//         if (+str === num) {
//             return false;
//         }
//         return true;
//     }

//     for (let i = 1; i <= N; i++) {
//         if (isRotate(i)) {
//             sum++;
//             ret.push(i);
//         }
//     }
//     console.log(JSON.stringify(ret));

//     return sum;
// };

// 方法二: 由于旋转数字的数字组合只可能在上述map中产生,所以将map改成list可以减少遍历的次数
var rotatedDigits = function (N) {
  const list = [
    [0, false],
    [1, false],
    [2, true],
    [5, true],
    [6, true],
    [8, false],
    [9, true]
  ]
  let sum = 0
  const recurrent = (count, hasDiff) => {
    if (count > N) return
    if (hasDiff) {
      sum++
    }
    let i = count === 0 ? 1 : 0
    for (; i < list.length; i++) {
      const [n, isDiff] = list[i]
      recurrent(count * 10 + n, isDiff || hasDiff)
    }
  }
  recurrent(0, false)
  return sum
}
// @lc code=end
