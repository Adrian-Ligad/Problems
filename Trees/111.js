/* 111 Minimum Depth of binary tree
    Given a binary tree, find its minimum depth.
    The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
 * @return {number}
 */
 var minDepth = function(root) {
    if(root === null) return 0
    let que = [[root,1]]
    while(que.length > 0) {
        let queL = que.length
        for(let i = 0; i < queL; ++i) {
            let [node, level] = que.shift()
            if(!node.left && !node.right) return level
            if(node.left) que.push([node.left, level + 1])
            if(node.right) que.push([node.right, level + 1])
            
        }
    }
};