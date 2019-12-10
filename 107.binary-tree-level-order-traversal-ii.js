/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {

    return recurrent([root], []);

};

function recurrent(nodelist, stack) {
    var temp = [];
    var nextNodeList = [];
    nodelist.forEach(node => {
        if (node) {
            temp.push(node.val);
            nextNodeList.push(node.left);
            nextNodeList.push(node.right);
        }
    });
    if (temp.length) {
        stack.unshift(temp);
    };
    if (nextNodeList.length) {
        return recurrent(nextNodeList, stack);
    }
    return stack;
}

