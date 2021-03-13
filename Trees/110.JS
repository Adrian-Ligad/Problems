// 110. Balanced Binary Tree
// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
    if(root === null) return true
    let maxL =  recursion(root, 1)
    return maxL ? true : false
    
    function recursion(node, depth) {
        if(node === null) return depth - 1
        let leftNodeMax = recursion(node.left, depth + 1)
        let rightNodeMax = recursion(node.right, depth + 1)
        if(!leftNodeMax || !rightNodeMax || Math.abs(leftNodeMax - rightNodeMax) > 1) return false
        return Math.max(leftNodeMax, rightNodeMax)
    }
    
};