/* 144. Binary Tree Preorder Traversal
Given the root of a binary tree, return the preorder traversal of its nodes' value
*/

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
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    const result = []
    if(!root) return result
    const que = [root]
    while(que.length > 0) {
        const node = que.pop();
        if(node.right) que.push(node.right)
        if(node.left) que.push(node.left)
        result.push(node.val)
    }
    return result
};