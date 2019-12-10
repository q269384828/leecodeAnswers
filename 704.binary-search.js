/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    function recurrent(min, max) {
        const midd = min + Math.floor((max - min) / 2);
        if (nums[midd] === target) {
            return midd;
        }
        if (max - min < 2) {
            return -1;
        }
        if (nums[midd] > target) {
            return recurrent(min, midd);
        }
        return recurrent(midd, max);
    }
    return recurrent(0, nums.length);

};



