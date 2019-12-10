/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const len=s.length;
    
    if (len < 2) {
        return s;
    }
    const dp = [...new Array(len)].map(e => []);
    let right = 0;
    let left = 0;
    let L=0;
    let R = 0;
    for (; right < len; right++) {
        for(left=right;left>=0;left--){
            if (s.charAt(left) === s.charAt(right) && (right - left <= 1 || dp[left + 1][right - 1])) {
                dp[left][right] = true;
                if ( (right-left)>(R-L)) {
                    L=left;
                    R = right;
                }
            }
        }
    }

    return s.slice(L, R + 1);
};

// @lc code=end

