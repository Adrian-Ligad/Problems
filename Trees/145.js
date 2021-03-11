/* 145. Binary Tree Postorder Traversal
Given the root of a binary tree, return the postorder traversal of its nodes' values.
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
 var postorderTraversal = function(root) {
    const result = []
    if(!root) return result
    const stack = [root]
    while(stack.length > 0) {
        const node = stack.pop()
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
        result.push(node.val)
    }
    return result.reverse()
};



//     const result = []
//     if(!root) return result
//     recursion(root)
//     return result
    
//     function recursion(node) {
//         if(!node) return
//         recursion(node.left)
//         recursion(node.right)
//         result.push(node.val)
//     }