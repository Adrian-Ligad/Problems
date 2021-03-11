/* 102) Binary Tree level order Traversal
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const result = []
    if(!root) return result
    let que = [root]
    while(que.length > 0) {
        const queL = que.length, level = []
        for(let i = 0; i < queL; i++) {
            let node = que.shift()
            if(node.left) que.push(node.left)
            if(node.right) que.push(node.right)
            level.push(node.val)
        }
        result.push(level)
    }
    return result
};