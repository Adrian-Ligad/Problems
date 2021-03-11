/* 199. Binary Tree Right Side View
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
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
 var rightSideView = function(root) {
    if(root === null) return []
    let result = [], que = [root]
    while(que.length > 0) {
        let seen = false
        let queL = que.length;
        for(let i = 0; i < queL; ++i) {
            let node = que.shift()
            if(!seen) {
                seen = true
                result.push(node.val)
            }
            if(node.right) que.push(node.right)
            if(node.left) que.push(node.left)
        }
    }
    return result
};