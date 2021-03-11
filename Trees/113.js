/* 113. Path Sum II
Given the root of a binary tree and an integer targetSum, 
return all root-to-leaf paths where each path's sum equals targetSum.
A leaf is a node with no children.
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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    let result = []
    recursion(root)
    
    function recursion(node, val = 0, stack = []) {
        if(node === null) return;
        let newVal = val + node.val
        stack.push(node.val)
        recursion(node.left, newVal, stack)
        recursion(node.right, newVal, stack)
        if(!node.left && !node.right && newVal === targetSum) result.push([...stack])
        stack.pop()
        
    }
    return result
};