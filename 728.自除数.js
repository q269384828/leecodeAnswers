/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 *
 * https://leetcode-cn.com/problems/self-dividing-numbers/description/
 *
 * algorithms
 * Easy (71.29%)
 * Likes:    82
 * Dislikes: 0
 * Total Accepted:    15K
 * Total Submissions: 21.1K
 * Testcase Example:  '1\n22'
 *
 * 自除数 是指可以被它包含的每一位数除尽的数。
 * 
 * 例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
 * 
 * 还有，自除数不允许包含 0 。
 * 
 * 给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。
 * 
 * 示例 1：
 * 
 * 
 * 输入： 
 * 上边界left = 1, 下边界right = 22
 * 输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
 * 
 * 
 * 注意：
 * 
 * 
 * 每个输入参数的边界满足 1 <= left <= right <= 10000。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let num = left;
    let list = [];
    function isSelfDividingNumber(num) {
        let flag = true;
        let target = num;
        while (target >= 1) {
            const dig = target % 10;
            if (dig === 0) {
                flag = false;
                break;
            }
            if (num % dig) {
                flag = false;
                break;
            }
            target = target / 10 | 0;
        }
        return flag;
    }
    for (; num <= right; num++) {
        if (isSelfDividingNumber(num)) {
            list.push(num);
        }
    }
    return list;
};
// @lc code=end