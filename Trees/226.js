/*226. Invert Binary Tree
Invert a binary tree.
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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if(root === null) return null;
    const que = [root]
    while(que.length > 0) {
        const node = que.shift()
        let tempLeft = node.left
        node.left = node.right
        node.right = tempLeft
        if(node.left) que.push(node.left)
        if(node.right) que.push(node.right)
    }
    return root
};