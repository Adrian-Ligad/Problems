/* 107. Binary Tree Level Order Traversal II
Given the root of a binary tree, 
return the bottom-up level order traversal of its nodes' values. 
(i.e., from left to right, level by level from leaf to root).
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
var levelOrderBottom = function(root) {
    const result = []
    if(root === null) return result
    const que = [root]
    while(que.length > 0) {
        const toPushToResult = []
        const queL = que.length
        for(let i = 0; i < queL; i++) {
            const node = que.shift()
            if(node.left) que.push(node.left)
            if(node.right) que.push(node.right)
            toPushToResult.push(node.val)
        }
        result.push(toPushToResult)
    }
    return result.reverse()
};