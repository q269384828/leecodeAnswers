/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    var count = 0;
    while (n) {
        count += n & 1;
        n = n >> 1;
    }
    return count;
};

