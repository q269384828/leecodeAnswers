/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 *
 * https://leetcode-cn.com/problems/base-7/description/
 *
 * algorithms
 * Easy (46.99%)
 * Likes:    28
 * Dislikes: 0
 * Total Accepted:    7.2K
 * Total Submissions: 15.2K
 * Testcase Example:  '100'
 *
 * 给定一个整数，将其转化为7进制，并以字符串形式输出。
 * 
 * 示例 1:
 * 
 * 
 * 输入: 100
 * 输出: "202"
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: -7
 * 输出: "-10"
 * 
 * 
 * 注意: 输入范围是 [-1e7, 1e7] 。
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    if (num === 0) {
        return "0";
    }
    let isPositive = false;
    if (num > 0) {
        isPositive = true;
    } else {
        num = -num;
    }
    let ret = '';

    while (num >= 1) {
        ret = num % 7 + ret;
        num = (num / 7) | 0;
    }
    if (!isPositive) {
        ret = '-' + ret;
    }
    return ret;
};
// @lc code=end