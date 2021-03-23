// 236. Lowest Common Ancestor of a Binary Tree
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined 
// between two nodes p and q as the lowest node in T that has both p and q as descendants 
// (where we allow a node to be a descendant of itself).”

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    return recursion(root)
    
    function recursion(node) {
        if(node === null) return false
        const left = recursion(node.left)
        const right = recursion(node.right)
        const isVal = node.val === p.val ? true : node.val === q.val ? true : false;
        if(typeof left === "object" || typeof right === "object" ) return left ? left : right
        if( left + right +isVal === 2)return node
        if(left + right === 1) return true
        if(node.val === p.val || node.val === q.val) return true
        return false
    }
};