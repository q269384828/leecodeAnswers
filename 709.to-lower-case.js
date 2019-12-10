/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    var charCode = 0;
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        // a-z
        // 97 - 122

        // A-Z 
        // 65 - 90
        charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode += 32;
            newStr += String.fromCharCode(charCode);
        } else {
            newStr += str.charAt(i);
        }

    }
    return newStr;
};

