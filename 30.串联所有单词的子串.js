/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 *
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (27.79%)
 * Likes:    176
 * Dislikes: 0
 * Total Accepted:    17.8K
 * Total Submissions: 63.7K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 * 
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * 输出：[0,9]
 * 解释：
 * 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
 * 输出的顺序不重要, [9,0] 也是有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入：
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * 输出：[]
 * 
 * 
 */


// @lc code=start

/**
 * 我的思路: 由于  words 中每个字符串的长度相等, 所以 截取 words.length*wordsLen长度的字符
 *          串作为待分析字符串,对这个字符串进行分割处理,然后借用map记录每个子串出现的次数,
 *          一致的话就是符合条件的
 */

function check(target, wordsMap, wordLen) {
    const map = Object.assign({}, wordsMap);
    for (let start = 0; start < target.length; start += wordLen) {
        const word = target.substr(start, wordLen);

        if (map[word] == null) {
            return false;
        }
        map[word]--;
        if (map[word] === 0) {
            delete map[word];
        }
    }
    return !Object.keys(map).length;
}
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    const wordsInMap = {};
    let ret = [];
    if (!words.length) {
        return [];
    }
    const wordLen = words[0].length;
    const targetLen = wordLen * words.length;
    words.forEach(word => {
        if (wordsInMap[word] == null) {
            wordsInMap[word] = 0;
        }
        wordsInMap[word]++;
    });

    for (let i = 0; i <= s.length - targetLen; i++) {
        const target = s.substr(i, targetLen);
        if (check(target, wordsInMap, wordLen)) {
            ret.push(i);
        }
    }
    return ret;
};
// @lc code=end