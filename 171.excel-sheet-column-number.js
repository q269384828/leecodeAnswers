/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let sum = 0;
    for (let index = 0; index < s.length; index++) {
        const code = s.charCodeAt(index) - 64;
        sum = sum * 26 + code;
    }
    return sum;
};

