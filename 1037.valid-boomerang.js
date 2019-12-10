/*
 * @lc app=leetcode id=1037 lang=javascript
 *
 * [1037] Valid Boomerang
 */
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
    const [[x0, y0], [x1, y1], [x2, y2]] = points;
    const vectorx1 = x0 - x1;
    const vectory1 = y0 - y1;
    const vectorx2 = x0 - x2;
    const vectory2 = y0 - y2;
    if ((vectorx1 === 0 && vectory1 === 0) || (vectorx2 === 0 && vectory2 === 0)) {
        return false;
    }
    return !!(vectorx1 * vectory2 - vectorx2 * vectory1);
};

