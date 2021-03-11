/* 103 Binary Tree Zigzag Level ORder Traversal
Given a binary tree, return the zigzag level order traversal of its nodes' values. 
(ie, from left to right, then right to left for the next level and alternate between).
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
 var zigzagLevelOrder = function(root) {
    let result = []
    if(!root) return result
    let que = [root], leftToRight = false
    while(que.length > 0) {
        let queL = que.length
        let toPushToQue = [], toPushToResult = []
        for( let i = 0; i < queL; i++) {
            const node = que.shift()
            if(node.left) toPushToQue.push(node.left)
            if(node.right) toPushToQue.push(node.right)
            toPushToResult.push(node.val)
        }
        que = toPushToQue;
        if(leftToRight) {
            result.push(toPushToResult.reverse())
        } else {
            result.push(toPushToResult)
        }
        leftToRight = !leftToRight
    }
    return result
};