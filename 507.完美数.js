/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 *
 * https://leetcode-cn.com/problems/perfect-number/description/
 *
 * algorithms
 * Easy (36.36%)
 * Likes:    39
 * Dislikes: 0
 * Total Accepted:    9.1K
 * Total Submissions: 24.9K
 * Testcase Example:  '28'
 *
 * 对于一个 正整数，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。
 * 
 * 给定一个 整数 n， 如果他是完美数，返回 True，否则返回 False
 * 
 * 
 * 
 * 示例：
 * 
 * 输入: 28
 * 输出: True
 * 解释: 28 = 1 + 2 + 4 + 7 + 14
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 输入的数字 n 不会超过 100,000,000. (1e8)
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if (num == 1) {
        return false;
    }
    let list = [1];
    let len = Math.ceil(Math.sqrt(num));
    for (let index = 2; index <= len; index++) {
        if (num % index === 0) {
            if (index !== list[list.length - 1]) {
                list.push(index)
            }
            const next = num / index;
            if (next > index) {
                list.push(next);
            } else {
                break;
            }
        }
    }
    const sum = list.reduce((pre, cur) => pre + cur);
    return sum === num;
};
// @lc code=end
