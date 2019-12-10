/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let count = 0;
    while (n = Math.floor(n / 5)) {
        count += n;
    }
    return count;

};