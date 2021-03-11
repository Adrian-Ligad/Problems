/* 112. Path Sum
Given the root of a binary tree and an integer targetSum, return 
true if the tree has a root-to-leaf path such 
that adding up all the values along the path equals targetSum.
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
 * @return {boolean}
 */

var hasPathSum = function(root, targetSum) {
    if(root === null) return false
    return recursion(root, 0)
    
    function recursion(node, curSum) {
        if(node === null) return false
        let sumUpToNode = curSum + node.val
        if(!node.left && !node.right) return sumUpToNode === targetSum ? true : false
        const leftSide = recursion(node.left, sumUpToNode)
        const rightSide = recursion(node.right, sumUpToNode)
        if( leftSide|| rightSide ) return true
        return false
    }
};


    // return recursion(root, 0)
    // function recursion ( node, val ) {
    //     if(node === null) return false
    //     let newVal = val + node.val
    //     if(!node.left && !node.right) return newVal === targetSum ? true : false
    //     let left = recursion(node.left, newVal)
    //     let right = recursion(node.right, newVal)
    //     if( left || right ) return true
    //     return false
    // }