/* 104. Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the 
longest path from the root node down to the farthest leaf node.

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
 * @return {number}
 */
 var maxDepth = function(root) {
    let depth = 0
    if(root === null) return depth;
    const que = [root]
    while(que.length !== 0) {
        depth++
        const queL = que.length
        for( let i = 0; i < queL; i++) {
            const node = que.shift()
            if(node.left) que.push(node.left) 
            if(node.right)que.push(node.right)
        }
    }
    return depth
};